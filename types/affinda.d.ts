import { AccessToken } from '@azure/identity';
import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import * as coreRestPipeline from '@azure/core-rest-pipeline';
import { GetTokenOptions } from '@azure/identity';
import { TokenCredential } from '@azure/identity';

export declare class AffindaAPI extends AffindaAPIContext {
    /**
     * Initializes a new instance of the AffindaAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: AffindaAPIOptionalParams);
    /**
     * Returns all the resume summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllResumes(options?: AffindaAPIGetAllResumesOptionalParams): Promise<AffindaAPIGetAllResumesResponse>;
    /**
     * Uploads a resume for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
     * results.
     * @param options The options parameters.
     */
    createResume(options?: AffindaAPICreateResumeOptionalParams): Promise<AffindaAPICreateResumeResponse>;
    /**
     * Returns all the parse results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/resumes](#operation/createResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getResume(identifier: string | null, options?: AffindaAPIGetResumeOptionalParams): Promise<AffindaAPIGetResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Resume identifier
     * @param options The options parameters.
     */
    deleteResume(identifier: string | null, options?: AffindaAPIDeleteResumeOptionalParams): Promise<AffindaAPIDeleteResumeResponse>;
    /**
     * Returns all the redacted resume information for that resume
     * @param options The options parameters.
     */
    getAllRedactedResumes(options?: AffindaAPIGetAllRedactedResumesOptionalParams): Promise<AffindaAPIGetAllRedactedResumesResponse>;
    /**
     * Uploads a resume for redacting.
     * @param options The options parameters.
     */
    createRedactedResume(options?: AffindaAPICreateRedactedResumeOptionalParams): Promise<AffindaAPICreateRedactedResumeResponse>;
    /**
     * Returns all the redaction results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/redacted_resumes](#operation/createRedactedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getRedactedResume(identifier: string | null, options?: AffindaAPIGetRedactedResumeOptionalParams): Promise<AffindaAPIGetRedactedResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteRedactedResume(identifier: string | null, options?: AffindaAPIDeleteRedactedResumeOptionalParams): Promise<AffindaAPIDeleteRedactedResumeResponse>;
    /**
     * Returns all the resume formats
     * @param options The options parameters.
     */
    getAllResumeFormats(options?: AffindaAPIGetAllResumeFormatsOptionalParams): Promise<AffindaAPIGetAllResumeFormatsResponse>;
    /**
     * Returns all the reformatted resume information for that resume
     * @param options The options parameters.
     */
    getAllReformattedResumes(options?: AffindaAPIGetAllReformattedResumesOptionalParams): Promise<AffindaAPIGetAllReformattedResumesResponse>;
    /**
     * Upload a resume for reformatting.
     * @param resumeFormat Identifier of the format used
     * @param options The options parameters.
     */
    createReformattedResume(resumeFormat: string, options?: AffindaAPICreateReformattedResumeOptionalParams): Promise<AffindaAPICreateReformattedResumeResponse>;
    /**
     * Returns all the reformatting results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/reformatted_resumes](#operation/createReformattedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getReformattedResume(identifier: string | null, options?: AffindaAPIGetReformattedResumeOptionalParams): Promise<AffindaAPIGetReformattedResumeResponse>;
    /**
     * Delete the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteReformattedResume(identifier: string | null, options?: AffindaAPIDeleteReformattedResumeOptionalParams): Promise<AffindaAPIDeleteReformattedResumeResponse>;
    /**
     * Searches through parsed resumes.
     * @param body Search parameters
     * @param options The options parameters.
     */
    createResumeSearch(body: ResumeSearchParameters | null, options?: AffindaAPICreateResumeSearchOptionalParams): Promise<AffindaAPICreateResumeSearchResponse>;
    /**
     * Returns all the indexes
     * @param options The options parameters.
     */
    getAllIndexes(options?: AffindaAPIGetAllIndexesOptionalParams): Promise<AffindaAPIGetAllIndexesResponse>;
    /**
     * Create an index for the search tool
     * @param options The options parameters.
     */
    createIndex(options?: AffindaAPICreateIndexOptionalParams): Promise<AffindaAPICreateIndexResponse>;
    /**
     * Deletes the specified index from the database
     * @param name Index name
     * @param options The options parameters.
     */
    deleteIndex(name: string, options?: AffindaAPIDeleteIndexOptionalParams): Promise<AffindaAPIDeleteIndexResponse>;
    /**
     * Returns all the indexed documents for that index
     * @param name Index name
     * @param options The options parameters.
     */
    getAllIndexDocuments(name: string, options?: AffindaAPIGetAllIndexDocumentsOptionalParams): Promise<AffindaAPIGetAllIndexDocumentsResponse>;
    /**
     * Create an indexed document for the search tool
     * @param name Index name
     * @param body Document to index
     * @param options The options parameters.
     */
    createIndexDocument(name: string, body: PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema, options?: AffindaAPICreateIndexDocumentOptionalParams): Promise<AffindaAPICreateIndexDocumentResponse>;
    /**
     * Delete the specified indexed document from the database
     * @param name Index name
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteIndexDocument(name: string, identifier: string | null, options?: AffindaAPIDeleteIndexDocumentOptionalParams): Promise<AffindaAPIDeleteIndexDocumentResponse>;
    /**
     * Returns all the invoice summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllInvoices(options?: AffindaAPIGetAllInvoicesOptionalParams): Promise<AffindaAPIGetAllInvoicesResponse>;
    /**
     * Uploads an invoice for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/invoices/{identifier}](#operation/getInvoice) endpoint to check processing status and retrieve
     * results.
     * @param options The options parameters.
     */
    createInvoice(options?: AffindaAPICreateInvoiceOptionalParams): Promise<AffindaAPICreateInvoiceResponse>;
    /**
     * Returns all the parse results for that invoice if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the invoice via the
     * [/invoices](#operation/createInvoice) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getInvoice(identifier: string | null, options?: AffindaAPIGetInvoiceOptionalParams): Promise<AffindaAPIGetInvoiceResponse>;
    /**
     * Delete the specified invoice from the database
     * @param identifier Invoice identifier
     * @param options The options parameters.
     */
    deleteInvoice(identifier: string | null, options?: AffindaAPIDeleteInvoiceOptionalParams): Promise<AffindaAPIDeleteInvoiceResponse>;
    /**
     * TODO TODO TODO
     * @param options The options parameters.
     */
    listOccupationGroups(options?: AffindaAPIListOccupationGroupsOptionalParams): Promise<AffindaAPIListOccupationGroupsResponse>;
}

export declare class AffindaAPIContext extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the AffindaAPIContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: AffindaAPIOptionalParams);
}

/** Optional parameters. */
export declare interface AffindaAPICreateIndexDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createIndexDocument operation. */
export declare type AffindaAPICreateIndexDocumentResponse = PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPICreateIndexOptionalParams extends coreClient.OperationOptions {
    name?: string;
}

/** Contains response data for the createIndex operation. */
export declare type AffindaAPICreateIndexResponse = Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPICreateInvoiceOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

/** Contains response data for the createInvoice operation. */
export declare type AffindaAPICreateInvoiceResponse = Invoice;

/** Optional parameters. */
export declare interface AffindaAPICreateRedactedResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** Whether to redact headshot */
    redactHeadshot?: string;
    /** Whether to redact personal details (e.g. name, address) */
    redactPersonalDetails?: string;
    /** Whether to redact work details (e.g. company names) */
    redactWorkDetails?: string;
    /** Whether to redact education details (e.g. university names) */
    redactEducationDetails?: string;
    /** Whether to redact referee details */
    redactReferees?: string;
    /** Whether to redact location names */
    redactLocations?: string;
    /** Whether to redact dates */
    redactDates?: string;
    /** Whether to redact gender */
    redactGender?: string;
}

/** Contains response data for the createRedactedResume operation. */
export declare type AffindaAPICreateRedactedResumeResponse = RedactedResume;

/** Optional parameters. */
export declare interface AffindaAPICreateReformattedResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
}

/** Contains response data for the createReformattedResume operation. */
export declare type AffindaAPICreateReformattedResumeResponse = ReformattedResume;

/** Optional parameters. */
export declare interface AffindaAPICreateResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

/** Contains response data for the createResume operation. */
export declare type AffindaAPICreateResumeResponse = Resume;

/** Optional parameters. */
export declare interface AffindaAPICreateResumeSearchOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the createResumeSearch operation. */
export declare type AffindaAPICreateResumeSearchResponse = ResumeSearch;

/** Optional parameters. */
export declare interface AffindaAPIDeleteIndexDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteIndexDocument operation. */
export declare type AffindaAPIDeleteIndexDocumentResponse = RequestError;

/** Optional parameters. */
export declare interface AffindaAPIDeleteIndexOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteIndex operation. */
export declare type AffindaAPIDeleteIndexResponse = RequestError;

/** Optional parameters. */
export declare interface AffindaAPIDeleteInvoiceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteInvoice operation. */
export declare type AffindaAPIDeleteInvoiceResponse = RequestError;

/** Optional parameters. */
export declare interface AffindaAPIDeleteRedactedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteRedactedResume operation. */
export declare type AffindaAPIDeleteRedactedResumeResponse = RequestError;

/** Optional parameters. */
export declare interface AffindaAPIDeleteReformattedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteReformattedResume operation. */
export declare type AffindaAPIDeleteReformattedResumeResponse = RequestError;

/** Optional parameters. */
export declare interface AffindaAPIDeleteResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteResume operation. */
export declare type AffindaAPIDeleteResumeResponse = RequestError;

/** Optional parameters. */
export declare interface AffindaAPIGetAllIndexDocumentsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllIndexDocuments operation. */
export declare type AffindaAPIGetAllIndexDocumentsResponse = PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllIndexesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllIndexes operation. */
export declare type AffindaAPIGetAllIndexesResponse = Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllInvoicesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllInvoices operation. */
export declare type AffindaAPIGetAllInvoicesResponse = GetAllInvoicesResults;

/** Optional parameters. */
export declare interface AffindaAPIGetAllRedactedResumesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllRedactedResumes operation. */
export declare type AffindaAPIGetAllRedactedResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export declare interface AffindaAPIGetAllReformattedResumesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllReformattedResumes operation. */
export declare type AffindaAPIGetAllReformattedResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export declare interface AffindaAPIGetAllResumeFormatsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllResumeFormats operation. */
export declare type AffindaAPIGetAllResumeFormatsResponse = Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllResumesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllResumes operation. */
export declare type AffindaAPIGetAllResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export declare interface AffindaAPIGetInvoiceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInvoice operation. */
export declare type AffindaAPIGetInvoiceResponse = Invoice;

/** Optional parameters. */
export declare interface AffindaAPIGetRedactedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRedactedResume operation. */
export declare type AffindaAPIGetRedactedResumeResponse = RedactedResume;

/** Optional parameters. */
export declare interface AffindaAPIGetReformattedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getReformattedResume operation. */
export declare type AffindaAPIGetReformattedResumeResponse = ReformattedResume;

/** Optional parameters. */
export declare interface AffindaAPIGetResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResume operation. */
export declare type AffindaAPIGetResumeResponse = Resume;

/** Optional parameters. */
export declare interface AffindaAPIListOccupationGroupsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOccupationGroups operation. */
export declare type AffindaAPIListOccupationGroupsResponse = OccupationGroup;

/** Optional parameters. */
export declare interface AffindaAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

export declare class AffindaCredential implements TokenCredential {
    token: string;
    constructor(token: string);
    getToken(scopes: string | string[], options?: GetTokenOptions): Promise<AccessToken | null>;
}

export declare interface Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification {
    /** SOC2020 classification for this job title */
    title?: string;
    /** SOC2020 minor group */
    minorGroup?: string;
    /** SOC2020 sub major group */
    subMajorGroup?: string;
    /** SOC2020 major group */
    majorGroup?: string;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    socCode?: number;
}

/** Defines values for EducationLevel. */
export declare type EducationLevel = "school" | "certificate" | "bachelors" | "masters" | "doctoral";

export declare interface ErrorModel {
    errorCode?: string;
    errorDetail?: string;
}

export declare interface Get200ApplicationJsonPropertiesItemsItem {
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier: string | null;
    /** URL to a template to apply */
    formatFile: string;
}

export declare interface GetAllDocumentsResults {
    /** Number of documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Meta[];
}

export declare interface GetAllInvoicesResults {
    /** Number of documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Meta[];
}

export declare interface Invoice {
    data: InvoiceData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface InvoiceData {
    invoiceDate?: string;
    invoiceOrderDate?: string;
    paymentDateDue?: string;
    paymentAmountBase?: string;
    paymentAmountTax?: string;
    paymentAmountTotal?: string;
    paymentAmountPaid?: string;
    paymentAmountDue?: string;
    invoiceNumber?: string;
    invoicePurchaseOrderNumber?: string;
    supplierBusinessNumber?: string;
    customerNumber?: string;
    customerBusinessNumber?: string;
    paymentReference?: string;
    bankAccountNumber?: string;
    supplierVAT?: string;
    customerVAT?: string;
    bpayBillerCode?: string;
    bpayReference?: string;
    bankSortCode?: string;
    bankIban?: string;
    bankSwift?: string;
    bankBSB?: string;
    customerContactName?: string;
    customerCompanyName?: string;
    supplierCompanyName?: string;
    customerBillingAddress?: Location;
    customerDeliveryAddress?: Location;
    supplierAddress?: Location;
    customerPhoneNumber?: string;
    supplierPhoneNumber?: string;
    supplierFax?: string;
    customerEmail?: string;
    supplierEmail?: string;
    supplierWebsite?: string;
}

export declare interface Location {
    formatted?: string;
    postalCode?: string;
    state?: string;
    country?: string;
    /** Two letter country code (ISO 3166-1 alpha-2) */
    countryCode?: string;
    rawInput: string;
    streetNumber?: string;
    street?: string;
    apartmentNumber?: string;
    city?: string;
}

/** Defines values for ManagementLevel. */
export declare type ManagementLevel = "Low" | "Mid" | "Upper";

export declare interface Meta {
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier: string | null;
    /** Optional filename of the file */
    fileName?: string;
    /** If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling */
    ready: boolean;
    /** The datetime when the document was ready */
    readyDt?: Date;
    /** If true, some exception was raised during processing. Check the 'error' field of the main return object. */
    failed: boolean;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

export declare interface OccupationGroup {
    code: number;
    name: string;
    children: OccupationGroup[];
}

export declare interface Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems {
    name: string;
}

export declare interface Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

export declare interface Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema {
    name?: string;
}

export declare interface Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema {
    /** Number of documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Get200ApplicationJsonPropertiesItemsItem[];
}

export declare interface Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema {
    /** Number of indexes in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems[];
}

export declare interface Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

export declare interface Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Whether to redact headshot */
    redactHeadshot?: string;
    /** Whether to redact personal details (e.g. name, address) */
    redactPersonalDetails?: string;
    /** Whether to redact work details (e.g. company names) */
    redactWorkDetails?: string;
    /** Whether to redact education details (e.g. university names) */
    redactEducationDetails?: string;
    /** Whether to redact referee details */
    redactReferees?: string;
    /** Whether to redact location names */
    redactLocations?: string;
    /** Whether to redact dates */
    redactDates?: string;
    /** Whether to redact gender */
    redactGender?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

export declare interface PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema {
    /** Unique identifier for the document. */
    document?: string;
}

export declare interface PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema {
    document?: string;
}

export declare interface PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems {
    document?: string;
}

export declare interface PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema {
    /** Number of indexed documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems[];
}

export declare interface PathsSot11NIndexPostRequestbodyContentMultipartFormDataSchema {
    name?: string;
}

export declare interface PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** Identifier of the format used */
    resumeFormat: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
}

export declare interface RedactedResume {
    data: RedactedResumeData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface RedactedResumeData {
    /** URL to redacted PDF */
    redactedPdf?: string;
}

export declare interface ReformattedResume {
    data: ReformattedResumeData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface ReformattedResumeData {
    reformattedFile?: string;
}

export declare interface RequestError {
    detail: string;
    statusCode: number;
}

export declare interface Resume {
    data: ResumeData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface ResumeData {
    name?: ResumeDataName;
    phoneNumbers?: string[];
    websites?: string[];
    emails?: string[];
    dateOfBirth?: string;
    location?: Location;
    objective?: string;
    languages?: string[];
    summary?: string;
    totalYearsExperience?: number;
    /** base64 encoded string */
    headShot?: Uint8Array;
    education?: ResumeDataEducationItem[];
    /** Prediction of the candidate's profession based on recent work experience */
    profession?: string;
    /** Linkedin account associated with the candidate */
    linkedin?: string;
    workExperience?: ResumeDataWorkExperienceItem[];
    skills?: ResumeDataSkillsItem[];
    certifications?: string[];
    publications?: string[];
    referees?: ResumeDataRefereesItem[];
    sections?: ResumeDataSectionsItem[];
    /** Probability that the given document is a resume. Values below 30 suggest that the document is not a resume. */
    isResumeProbability?: number;
    /** All of the raw text of the parsed resume, example is shortened for readiblity */
    rawText?: string;
}

export declare interface ResumeDataEducationItem {
    organization?: string;
    accreditation?: ResumeDataEducationItemAccreditation;
    grade?: ResumeDataEducationItemGrade;
    location?: Location;
    dates?: ResumeDataEducationItemDates;
}

export declare interface ResumeDataEducationItemAccreditation {
    education?: string;
    inputStr?: string;
    matchStr?: string;
    educationLevel?: string;
}

export declare interface ResumeDataEducationItemDates {
    completionDate?: Date;
    isCurrent?: boolean;
    startDate?: Date;
}

export declare interface ResumeDataEducationItemGrade {
    raw?: string;
    metric?: string;
    value?: string;
}

export declare interface ResumeDataName {
    raw?: string;
    first?: string;
    last?: string;
    middle?: string;
    title?: string;
}

export declare interface ResumeDataRefereesItem {
    name?: string;
    text?: string;
    email?: string;
    number?: string;
}

export declare interface ResumeDataSectionsItem {
    sectionType?: string;
    bbox?: number[];
    pageIndex?: number;
    text?: string;
}

export declare interface ResumeDataSkillsItem {
    name?: string;
    lastUsed?: string;
    numberOfMonths?: number;
    type?: string;
    sources?: ResumeDataSkillsPropertiesItemsItem[];
}

export declare interface ResumeDataSkillsPropertiesItemsItem {
    section?: string;
    position?: number;
}

export declare interface ResumeDataWorkExperienceItem {
    jobTitle?: string;
    organization?: string;
    location?: Location;
    jobDescription?: string;
    dates?: ResumeDataWorkExperienceItemDates;
    occupation?: ResumeDataWorkExperienceItemOccupation;
}

export declare interface ResumeDataWorkExperienceItemDates {
    startDate?: Date;
    endDate?: Date;
    monthsInPosition?: number;
    isCurrent?: boolean;
}

export declare interface ResumeDataWorkExperienceItemOccupation {
    /** The raw (not normalized) job title pulled from the work experience entry */
    jobTitle?: string;
    /** Mapped onto the EMSI job title taxonomy if a sufficiently close match exists. */
    jobTitleNormalized?: string;
    managementLevel?: ManagementLevel;
    classification?: Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification;
}

export declare interface ResumeSearch {
    /** Total number of results */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    parameters?: ResumeSearchParameters;
    results?: ResumeSearchResult[];
}

export declare interface ResumeSearchParameters {
    indices: string[];
    jobTitles?: string[];
    jobTitlesCurrentOnly?: boolean;
    jobTitlesRequired?: boolean;
    jobTitlesWeight?: number;
    yearsExperienceMin?: number;
    yearsExperienceMax?: number;
    yearsExperienceRequired?: boolean;
    yearsExperienceWeight?: number;
    locations?: ResumeSearchParametersLocationsItem[];
    locationsWeight?: number;
    locationsRequired?: boolean;
    skills?: ResumeSearchParametersSkillsItem[];
    skillsWeight?: number;
    languages?: ResumeSearchParametersLanguagesItem[];
    languagesWeight?: number;
    institutions?: string[];
    institutionsRequired?: boolean;
    degrees?: string[];
    degreesRequired?: boolean;
    highestDegreeTypes?: (EducationLevel | null)[];
    highestDegreeTypesRequired?: boolean;
    isCurrentStudent?: boolean;
    isCurrentStudentRequired?: boolean;
    isRecentGraduate?: boolean;
    isRecentGraduateRequired?: boolean;
    educationWeight?: number;
    searchExpression?: string;
    searchExpressionRequired?: boolean;
    searchExpressionWeight?: number;
    socCodes?: number[];
    socCodesWeight?: number;
    socCodesRequired?: boolean;
    managementLevel?: ManagementLevel;
    managementLevelRequired?: boolean;
    managementLevelWeight?: number;
}

export declare interface ResumeSearchParametersLanguagesItem {
    name?: string;
    required?: boolean;
}

export declare interface ResumeSearchParametersLocationsItem {
    name?: string;
    coordinates?: ResumeSearchParametersLocationsItemCoordinates;
    distance?: number;
    unit?: SearchLocationUnit;
}

export declare interface ResumeSearchParametersLocationsItemCoordinates {
    latitude?: number;
    longitude?: number;
}

export declare interface ResumeSearchParametersSkillsItem {
    name?: string;
    required?: boolean;
}

export declare interface ResumeSearchResult {
    /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
    identifier: string | null;
    score: number;
    pdf: string;
    name?: string;
    jobTitle: ResumeSearchScoreComponent;
    managementLevel: ResumeSearchScoreComponent;
    experience: ResumeSearchScoreComponent;
    skills: ResumeSearchScoreComponent;
    languages: ResumeSearchScoreComponent;
    location: ResumeSearchScoreComponent;
    education: ResumeSearchScoreComponent;
    occupationGroup: ResumeSearchScoreComponent;
}

export declare interface ResumeSearchScoreComponent {
    label: string;
    value?: string;
    score?: number;
}

/** Defines values for SearchLocationUnit. */
export declare type SearchLocationUnit = "km" | "mi";

export { }
