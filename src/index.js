/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AdministrativeUnit from './model/AdministrativeUnit';
import AdministrativeUnitAutocomplete from './model/AdministrativeUnitAutocomplete';
import Case from './model/Case';
import CaseAutocomplete from './model/CaseAutocomplete';
import CaseCount from './model/CaseCount';
import Channel from './model/Channel';
import ChannelAutocomplete from './model/ChannelAutocomplete';
import Collection from './model/Collection';
import DocumentType from './model/DocumentType';
import DocumentTypeAutocomplete from './model/DocumentTypeAutocomplete';
import Event from './model/Event';
import EventAutocomplete from './model/EventAutocomplete';
import Feature from './model/Feature';
import FeatureAutocomplete from './model/FeatureAutocomplete';
import FeatureOption from './model/FeatureOption';
import FeatureOptionAutocomplete from './model/FeatureOptionAutocomplete';
import File from './model/File';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse20010 from './model/InlineResponse20010';
import InlineResponse20011 from './model/InlineResponse20011';
import InlineResponse20012 from './model/InlineResponse20012';
import InlineResponse20013 from './model/InlineResponse20013';
import InlineResponse20014 from './model/InlineResponse20014';
import InlineResponse20015 from './model/InlineResponse20015';
import InlineResponse20016 from './model/InlineResponse20016';
import InlineResponse20017 from './model/InlineResponse20017';
import InlineResponse20018 from './model/InlineResponse20018';
import InlineResponse20019 from './model/InlineResponse20019';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse20020 from './model/InlineResponse20020';
import InlineResponse20021 from './model/InlineResponse20021';
import InlineResponse20022 from './model/InlineResponse20022';
import InlineResponse20023 from './model/InlineResponse20023';
import InlineResponse20024 from './model/InlineResponse20024';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse2006 from './model/InlineResponse2006';
import InlineResponse2007 from './model/InlineResponse2007';
import InlineResponse2008 from './model/InlineResponse2008';
import InlineResponse2009 from './model/InlineResponse2009';
import Institution from './model/Institution';
import InstitutionAutocomplete from './model/InstitutionAutocomplete';
import Letter from './model/Letter';
import Note from './model/Note';
import RefreshTokenRequest from './model/RefreshTokenRequest';
import Request from './model/Request';
import SignRequest from './model/SignRequest';
import Tag from './model/Tag';
import TagAutocomplete from './model/TagAutocomplete';
import TokenResponse from './model/TokenResponse';
import TokenSet from './model/TokenSet';
import User from './model/User';
import UserAutocomplete from './model/UserAutocomplete';
import AdministrativeUnitsApi from './small_eod/AdministrativeUnitsApi';
import AutocompleteApi from './small_eod/AutocompleteApi';
import CasesApi from './small_eod/CasesApi';
import ChannelsApi from './small_eod/ChannelsApi';
import CollectionsApi from './small_eod/CollectionsApi';
import DocumentTypesApi from './small_eod/DocumentTypesApi';
import EventsApi from './small_eod/EventsApi';
import FeatureOptionsApi from './small_eod/FeatureOptionsApi';
import FeaturesApi from './small_eod/FeaturesApi';
import InstitutionsApi from './small_eod/InstitutionsApi';
import LettersApi from './small_eod/LettersApi';
import NotesApi from './small_eod/NotesApi';
import TagsApi from './small_eod/TagsApi';
import UsersApi from './small_eod/UsersApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SmallEodClient = require('index'); // See note below*.
* var xxxSvc = new SmallEodClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SmallEodClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SmallEodClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SmallEodClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.4
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdministrativeUnit model constructor.
     * @property {module:model/AdministrativeUnit}
     */
    AdministrativeUnit,

    /**
     * The AdministrativeUnitAutocomplete model constructor.
     * @property {module:model/AdministrativeUnitAutocomplete}
     */
    AdministrativeUnitAutocomplete,

    /**
     * The Case model constructor.
     * @property {module:model/Case}
     */
    Case,

    /**
     * The CaseAutocomplete model constructor.
     * @property {module:model/CaseAutocomplete}
     */
    CaseAutocomplete,

    /**
     * The CaseCount model constructor.
     * @property {module:model/CaseCount}
     */
    CaseCount,

    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel,

    /**
     * The ChannelAutocomplete model constructor.
     * @property {module:model/ChannelAutocomplete}
     */
    ChannelAutocomplete,

    /**
     * The Collection model constructor.
     * @property {module:model/Collection}
     */
    Collection,

    /**
     * The DocumentType model constructor.
     * @property {module:model/DocumentType}
     */
    DocumentType,

    /**
     * The DocumentTypeAutocomplete model constructor.
     * @property {module:model/DocumentTypeAutocomplete}
     */
    DocumentTypeAutocomplete,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventAutocomplete model constructor.
     * @property {module:model/EventAutocomplete}
     */
    EventAutocomplete,

    /**
     * The Feature model constructor.
     * @property {module:model/Feature}
     */
    Feature,

    /**
     * The FeatureAutocomplete model constructor.
     * @property {module:model/FeatureAutocomplete}
     */
    FeatureAutocomplete,

    /**
     * The FeatureOption model constructor.
     * @property {module:model/FeatureOption}
     */
    FeatureOption,

    /**
     * The FeatureOptionAutocomplete model constructor.
     * @property {module:model/FeatureOptionAutocomplete}
     */
    FeatureOptionAutocomplete,

    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012,

    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013,

    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014,

    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015,

    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016,

    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017,

    /**
     * The InlineResponse20018 model constructor.
     * @property {module:model/InlineResponse20018}
     */
    InlineResponse20018,

    /**
     * The InlineResponse20019 model constructor.
     * @property {module:model/InlineResponse20019}
     */
    InlineResponse20019,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse20020 model constructor.
     * @property {module:model/InlineResponse20020}
     */
    InlineResponse20020,

    /**
     * The InlineResponse20021 model constructor.
     * @property {module:model/InlineResponse20021}
     */
    InlineResponse20021,

    /**
     * The InlineResponse20022 model constructor.
     * @property {module:model/InlineResponse20022}
     */
    InlineResponse20022,

    /**
     * The InlineResponse20023 model constructor.
     * @property {module:model/InlineResponse20023}
     */
    InlineResponse20023,

    /**
     * The InlineResponse20024 model constructor.
     * @property {module:model/InlineResponse20024}
     */
    InlineResponse20024,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The Institution model constructor.
     * @property {module:model/Institution}
     */
    Institution,

    /**
     * The InstitutionAutocomplete model constructor.
     * @property {module:model/InstitutionAutocomplete}
     */
    InstitutionAutocomplete,

    /**
     * The Letter model constructor.
     * @property {module:model/Letter}
     */
    Letter,

    /**
     * The Note model constructor.
     * @property {module:model/Note}
     */
    Note,

    /**
     * The RefreshTokenRequest model constructor.
     * @property {module:model/RefreshTokenRequest}
     */
    RefreshTokenRequest,

    /**
     * The Request model constructor.
     * @property {module:model/Request}
     */
    Request,

    /**
     * The SignRequest model constructor.
     * @property {module:model/SignRequest}
     */
    SignRequest,

    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag,

    /**
     * The TagAutocomplete model constructor.
     * @property {module:model/TagAutocomplete}
     */
    TagAutocomplete,

    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse,

    /**
     * The TokenSet model constructor.
     * @property {module:model/TokenSet}
     */
    TokenSet,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserAutocomplete model constructor.
     * @property {module:model/UserAutocomplete}
     */
    UserAutocomplete,

    /**
    * The AdministrativeUnitsApi service constructor.
    * @property {module:small_eod/AdministrativeUnitsApi}
    */
    AdministrativeUnitsApi,

    /**
    * The AutocompleteApi service constructor.
    * @property {module:small_eod/AutocompleteApi}
    */
    AutocompleteApi,

    /**
    * The CasesApi service constructor.
    * @property {module:small_eod/CasesApi}
    */
    CasesApi,

    /**
    * The ChannelsApi service constructor.
    * @property {module:small_eod/ChannelsApi}
    */
    ChannelsApi,

    /**
    * The CollectionsApi service constructor.
    * @property {module:small_eod/CollectionsApi}
    */
    CollectionsApi,

    /**
    * The DocumentTypesApi service constructor.
    * @property {module:small_eod/DocumentTypesApi}
    */
    DocumentTypesApi,

    /**
    * The EventsApi service constructor.
    * @property {module:small_eod/EventsApi}
    */
    EventsApi,

    /**
    * The FeatureOptionsApi service constructor.
    * @property {module:small_eod/FeatureOptionsApi}
    */
    FeatureOptionsApi,

    /**
    * The FeaturesApi service constructor.
    * @property {module:small_eod/FeaturesApi}
    */
    FeaturesApi,

    /**
    * The InstitutionsApi service constructor.
    * @property {module:small_eod/InstitutionsApi}
    */
    InstitutionsApi,

    /**
    * The LettersApi service constructor.
    * @property {module:small_eod/LettersApi}
    */
    LettersApi,

    /**
    * The NotesApi service constructor.
    * @property {module:small_eod/NotesApi}
    */
    NotesApi,

    /**
    * The TagsApi service constructor.
    * @property {module:small_eod/TagsApi}
    */
    TagsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:small_eod/UsersApi}
    */
    UsersApi
};
