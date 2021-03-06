/**
 * Data parser module.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { DateFormatter } from "../formatters/DateFormatter";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines common options for all data parsers.
 */
export interface IDataParserOptions {
    /**
     * Empty values (e.g. empty strings, `null`, etc.) will be replaced with
     * this.
     *
     * @type {any}
     */
    emptyAs?: any;
    /**
     * List of fields in data that hold numeric values. Parser will try to
     * convert the value in those fields to a `number`.
     *
     * @type {string[]}
     */
    numberFields?: string[];
    /**
     * List of fields in data that need to be treated as Dates, i.e. converted
     * to `Date` objects from whatever source format they are currently in.
     *
     * @type {string[]}
     */
    dateFields?: string[];
    /**
     * An instance of [[DateFormatter]] to use when parsing string-based dates.
     * If it's not set, the parser will create it's own instance of
     * [[DateFormatter]], should any date parsing required. (`dateFields` is set)
     *
     * Unless `dateFormat` is set in parser options, the parser will try to look
     * for `dateFormat` in `dateFormatter`.
     *
     * @see {@link https://www.amcharts.com/docs/v4/concepts/formatters/formatting-date-time/#Parsing_Dates} Tutorial on date parsing
     * @type {DateFormatter}
     */
    dateFormatter?: DateFormatter;
    /**
     * Override date format set in `dateFormatter`.
     *
     * @see {@link https://www.amcharts.com/docs/v4/concepts/formatters/formatting-date-time/#Parsing_Dates} Tutorial on date parsing
     * @type {string}
     */
    dateFormat?: string;
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Base class for the data parsers.
 */
export declare class DataParser {
    /**
     * Content type, relevant to the specific format.
     *
     * @type {string}
     */
    type: string;
    /**
     * Parser options.
     *
     * @see {@link IDataParserOptions} for description of each option
     * @type {IDataParserOptions}
     */
    options: IDataParserOptions;
    /**
     * A "placeholder" function for real parsers to override.
     *
     * @ignore Exclude from docs
     * @param  {string}  data  Source data
     * @return {any}           Parsed data (empty)
     */
    parse(data: string): any;
    /**
     * Checks if there are any numeric fields that need to be converted to
     * numbers.
     *
     * @return {boolean} Numeric fields?
     */
    protected readonly parsableNumbers: boolean;
    /**
     * Converts a value to 'number' if it is in `numberFields`.
     *
     * @param  {string}  field  Field name
     * @param  {any}     value  Value
     * @return {any}            Parsed or original value
     */
    protected maybeToNumber(field: string, value: any): any;
    /**
     * Checks if there are any date fields that need to be converted to `Date`
     * objects.
     *
     * @return {boolean} Date fields?
     */
    protected readonly parsableDates: boolean;
    /**
     * Converts a value to `Date` if it is in `dateFields`.
     *
     * @param  {string}  field  Field name
     * @param  {any}     value  Value
     * @return {any}            Parsed or original value
     */
    protected maybeToDate(field: string, value: any): any;
    /**
     * Replaces empty value with something else.
     *
     * @param  {any}  value  Source value
     * @return {any}         Source value or replacement
     */
    protected maybeToEmpty(value: any): any;
    /**
     * [[DateFormatter]] object for date parsing.
     *
     * If there was not [[DateFormatter]] supplied in parser options, a new one
     * is created.
     *
     * @return {DateFormatter} Date formatter
     * @see {@link DateFormatter}
     */
    protected readonly dateFormatter: DateFormatter;
    /**
     * A date format to use when parsing dates.
     *
     * @return {string} Date format
     * @see {@link DateFormatter}
     */
    protected readonly dateFormat: string;
}
