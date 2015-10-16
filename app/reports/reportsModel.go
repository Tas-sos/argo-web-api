/*
 * Copyright (c) 2014 GRNET S.A., SRCE, IN2P3 CNRS Computing Centre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS
 * IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * The views and conclusions contained in the software and
 * documentation are those of the authors and should not be
 * interpreted as representing official policies, either expressed
 * or implied, of either GRNET S.A., SRCE or IN2P3 CNRS Computing
 * Centre
 *
 * The work represented by this source file is partially funded by
 * the EGI-InSPIRE project through the European Commission's 7th
 * Framework Programme (contract # INFSO-RI-261323)
 */

package reports

import (
	"encoding/xml"
	"errors"
	"fmt"

	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

// MongoInterface is used as an interface to Marshal and Unmarshal from different formats
type MongoInterface struct {
	UUID     string    `bson:"id,omitempty" json:"id,omitempty" xml:"id,omitempty"`
	Info     Info      `bson:"info" json:"info" xml:"info"`
	Topology Topology  `bson:"topology_schema" json:"topology_schema" xml:"topology_schema"`
	Profiles []Profile `bson:"profiles" json:"profiles" xml:"profiles"`
	Tags     []Tag     `bson:"filter_tags" json:"filter_tags" xml:"filter_tags"`
}

// Info conatins info about a report and is used inside the main MongoInterface struct
type Info struct {
	Name        string `bson:"name,omitempty" json:"name" xml:"name"`
	Description string `bson:"description,omitempty" json:"description" xml:"description"`
	Created     string `bson:"created,omitempty" json:"created,omitempty" xml:"created,omitempty"`
	Updated     string `bson:"updated,omitempty" json:"updated,omitempty" xml:"updated,omitempty"`
}

// Topology contains the topology used in this report and is used inside the main MongoInterface struct
type Topology struct {
	// Nesting int            `bson:"nesting" json:"nesting" xml:"nesting"`
	Group *TopologyLevel `bson:"group,omitempty" json:"group,omitempty" xml:"group,omitempty"`
}

// TopologyLevel is used to create the multiple nesting levels for the Topology struct
type TopologyLevel struct {
	Type  string         `bson:"type" json:"type" xml:"type"`
	Group *TopologyLevel `bson:"group,omitempty" json:"group,omitempty" xml:"group,omitempty"`
}

// Profile holds info about the profiles included in a report definition
type Profile struct {
	XMLName xml.Name `bson:"-"          json:"-"     xml:"profile"`
	UUID    string   `bson:"uuid"       json:"uuid"  xml:"uuid,attr"`
	Name    string   `bson:"name"       json:"name"  xml:"name,attr"`
	Type    string   `bson:"type"       json:"type"  xml:"type,attr"`
}

// Tag holds info about the tags used in filtering in a report definition
type Tag struct {
	XMLName xml.Name `bson:",omitempty" json:"-"     xml:"tag"`
	Name    string   `bson:"name"       json:"name"  xml:"name,attr"`
	Value   string   `bson:"value"      json:"value" xml:"value,attr"`
}

// Message struct for xml message response
type Message struct {
	XMLName xml.Name `xml:"root"`
	Message string
}

// RootXML struct to represent the root of the xml document
type RootXML struct {
	XMLName xml.Name `xml:"root" json:"-"`
	Reports interface{}
}

// GetEndpointGroupType retrieves the deepest type nested inside the group hierarchy
func (report MongoInterface) GetEndpointGroupType() string {
	currentObject := report.Topology.Group
	for currentObject.Group != nil {
		currentObject = currentObject.Group
	}
	return currentObject.Type
}

// GetGroupType retrieves the first type nested inside the group hierarchy
func (report MongoInterface) GetGroupType() string {
	return report.Topology.Group.Type
}

// DetermineGroupType looks into a report struct topology group pointers and determines
// whether a given groupType is a lesser_group or group or does not exist in the report.
func (report MongoInterface) DetermineGroupType(groupType string) string {
	nestinglevel := 1
	currentObject := report.Topology.Group
	found := false
	for currentObject.Group != nil {
		nestinglevel++
		if currentObject.Type == groupType {
			found = true
		}
		currentObject = currentObject.Group
	}
	if currentObject.Type == groupType {
		return "endpoint"
	} else if found {
		return "group"
	}
	return ""
}

var validators = map[string]string{
	"metric":      "metric_profiles",
	"aggregation": "aggregation_profiles",
	"operations":  "operations_profiles",
}

// ValidateProfiles ensures that the profiles in a report actually exist in the database and
// corrects possible name inconsistencies
func (report MongoInterface) ValidateProfiles(db *mgo.Database) []string {
	errs := []string{}
	for _, element := range report.Profiles {
		var result interface{}
		colName := validators[element.Type]
		if colName != "" {
			err := db.C(colName).Find(bson.M{"uuid": element.UUID}).One(&result)
			if err != nil {
				errs = append(errs, fmt.Sprintf("No profile in %s was found with uuid %s", colName, element.UUID))
				continue
			}
			element.Name = result.(bson.M)["name"].(string)
		}
	}
	return errs
}

// GetMetricProfile is a function that takes a report struc element
// and returns the name of the metric profile (if exists)
func GetMetricProfile(input MongoInterface) (string, error) {
	for _, element := range input.Profiles {
		if element.Type == "metric" {
			return element.Name, nil
		}
	}
	return "", errors.New("Unable to find metric profile with specified name")
}

// searchName is used to create a simple query object based on name
func searchName(name string) bson.M {
	query := bson.M{
		"info.name": name,
	}

	return query
}