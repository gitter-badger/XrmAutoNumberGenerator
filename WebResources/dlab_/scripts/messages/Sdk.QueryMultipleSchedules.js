// =====================================================================
//  This file is part of the Microsoft Dynamics CRM SDK code samples.
//
//  Copyright (C) Microsoft Corporation.  All rights reserved.
//
//  This source code is intended only as a supplement to Microsoft
//  Development Tools and/or on-line documentation.  See these other
//  materials for detailed information regarding Microsoft code samples.
//
//  THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
//  KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
//  IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
//  PARTICULAR PURPOSE.
// =====================================================================
"use strict";
(function ()
{
 this.QueryMultipleSchedulesRequest = function (resourceIds, start, end, timeCodes) {
  ///<summary>
  /// Contains the data that is needed to  search multiple resources for available time block that match the specified parameters.
  ///</summary>
  ///<param name="resourceIds"  type="Sdk.Collection">
  /// Sets the IDs of the resources. Required.
  ///</param>
  ///<param name="start"  type="Date">
  /// Sets the start of the time slot. Required.
  ///</param>
  ///<param name="end"  type="Date">
  /// Sets the end time for the scheduled block of time. Required.
  ///</param>
  ///<param name="timeCodes"  type="Sdk.Collection">
  /// Sets the time codes to look for: Available, Busy, Unavailable, or Filter, which correspond to the resource IDs. Required.
  ///</param>
  if (!(this instanceof Sdk.QueryMultipleSchedulesRequest)) {
   return new Sdk.QueryMultipleSchedulesRequest(resourceIds, start, end, timeCodes);
  }
  Sdk.OrganizationRequest.call(this);

  // Internal properties
  var _resourceIds = null;
  var _start = null;
  var _end = null;
  var _timeCodes = null;

  // internal validation functions

  function _setValidResourceIds(value) {
   if (Sdk.Util.isCollectionOf(value, String)) {
    _resourceIds = value;
   }
   else {
    throw new Error("Sdk.QueryMultipleSchedulesRequest ResourceIds property is required and must be a Sdk.Collection.")
   }
  }

  function _setValidStart(value) {
   if (value instanceof Date) {
    _start = value;
   }
   else {
    throw new Error("Sdk.QueryMultipleSchedulesRequest Start property is required and must be a Date.")
   }
  }

  function _setValidEnd(value) {
   if (value instanceof Date) {
    _end = value;
   }
   else {
    throw new Error("Sdk.QueryMultipleSchedulesRequest End property is required and must be a Date.")
   }
  }

  function _setValidTimeCodes(value) {
   if (Sdk.Util.isCollectionOf(value, String)) {
    _timeCodes = value;
   }
   else {
    throw new Error("Sdk.QueryMultipleSchedulesRequest TimeCodes property is required and must be a Sdk.Collection.")
   }
  }

  //Set internal properties from constructor parameters
  if (typeof resourceIds != "undefined") {
   _setValidResourceIds(resourceIds);
  }
  if (typeof start != "undefined") {
   _setValidStart(start);
  }
  if (typeof end != "undefined") {
   _setValidEnd(end);
  }
  if (typeof timeCodes != "undefined") {
   _setValidTimeCodes(timeCodes);
  }

  function getRequestXml() {
   return ["<d:request>",
           "<a:Parameters>",

             "<a:KeyValuePairOfstringanyType>",
               "<b:key>ResourceIds</b:key>",
              (_resourceIds == null) ? "<b:value i:nil=\"true\" />" :
              ["<b:value i:type=\"f:ArrayOfguid\">", _resourceIds.toArrayOfValueXml("f:guid"), "</b:value>"].join(""),
             "</a:KeyValuePairOfstringanyType>",

             "<a:KeyValuePairOfstringanyType>",
               "<b:key>Start</b:key>",
              (_start == null) ? "<b:value i:nil=\"true\" />" :
              ["<b:value i:type=\"c:dateTime\">", _start.toISOString(), "</b:value>"].join(""),
             "</a:KeyValuePairOfstringanyType>",

             "<a:KeyValuePairOfstringanyType>",
               "<b:key>End</b:key>",
              (_end == null) ? "<b:value i:nil=\"true\" />" :
              ["<b:value i:type=\"c:dateTime\">", _end.toISOString(), "</b:value>"].join(""),
             "</a:KeyValuePairOfstringanyType>",

             "<a:KeyValuePairOfstringanyType>",
               "<b:key>TimeCodes</b:key>",
              (_timeCodes == null) ? "<b:value i:nil=\"true\" />" :
              ["<b:value i:type=\"a:ArrayOfTimeCode\">", _timeCodes.toArrayOfValueXml("g:TimeCode"), "</b:value>"].join(""),
             "</a:KeyValuePairOfstringanyType>",

           "</a:Parameters>",
           "<a:RequestId i:nil=\"true\" />",
           "<a:RequestName>QueryMultipleSchedules</a:RequestName>",
         "</d:request>"].join("");
  }

  this.setResponseType(Sdk.QueryMultipleSchedulesResponse);
  this.setRequestXml(getRequestXml());

  // Public methods to set properties
  this.setResourceIds = function (value) {
   ///<summary>
   /// Sets the IDs of the resources. Required.
   ///</summary>
   ///<param name="value" type="Sdk.Collection">
   /// The IDs of the resources.
   ///</param>
   _setValidResourceIds(value);
   this.setRequestXml(getRequestXml());
  }

  this.setStart = function (value) {
   ///<summary>
   /// Sets the start of the time slot. Required.
   ///</summary>
   ///<param name="value" type="Date">
   /// The start of the time slot.
   ///</param>
   _setValidStart(value);
   this.setRequestXml(getRequestXml());
  }

  this.setEnd = function (value) {
   ///<summary>
   /// Sets the end time for the scheduled block of time. Required.
   ///</summary>
   ///<param name="value" type="Date">
   /// The end time for the scheduled block of time.
   ///</param>
   _setValidEnd(value);
   this.setRequestXml(getRequestXml());
  }

  this.setTimeCodes = function (value) {
   ///<summary>
   /// Sets the time codes to look for: Available, Busy, Unavailable, or Filter, which correspond to the resource IDs. Required.
   ///</summary>
   ///<param name="value" type="Sdk.Collection">
   /// The time codes to look for: Available, Busy, Unavailable, or Filter, which correspond to the resource IDs.
   ///</param>
   _setValidTimeCodes(value);
   this.setRequestXml(getRequestXml());
  }

 }
 this.QueryMultipleSchedulesRequest.__class = true;

 this.QueryMultipleSchedulesResponse = function (responseXml) {
  ///<summary>
  /// Response to QueryMultipleSchedulesRequest
  ///</summary>
  if (!(this instanceof Sdk.QueryMultipleSchedulesResponse)) {
   return new Sdk.QueryMultipleSchedulesResponse(responseXml);
  }
  Sdk.OrganizationResponse.call(this)

  // Internal properties
  var _timeInfos = null;

  // Internal property setter functions

  function _setTimeInfos(xml) {
   var valueNode = Sdk.Xml.selectSingleNode(xml, "//a:KeyValuePairOfstringanyType[b:key='TimeInfos']/b:value");
   if (!Sdk.Xml.isNodeNull(valueNode)) {
    _timeInfos = Sdk.Util.createCollectionOfTimeInfoCollectionFromNode(valueNode);
   }
  }
  //Public Methods to retrieve properties
  this.getTimeInfos = function () {
   ///<summary>
   /// Gets the results of the search, which is a set of possible time block for each resource.
   ///</summary>
   ///<returns type="Sdk.Collection">
   /// The results of the search, which is a set of possible time block for each resource.
   ///</returns>
   return _timeInfos;
  }

  //Set property values from responseXml constructor parameter
  _setTimeInfos(responseXml);
 }
 this.QueryMultipleSchedulesResponse.__class = true;
}).call(Sdk)

Sdk.QueryMultipleSchedulesRequest.prototype = new Sdk.OrganizationRequest();
Sdk.QueryMultipleSchedulesResponse.prototype = new Sdk.OrganizationResponse();
