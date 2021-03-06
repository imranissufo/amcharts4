/**
 * A collection of GeoJSON format-related utility functions.
 */
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
import * as $math from "../../core/utils/Math";
/**
 * Normalizes a geo-point.
 *
 * @ignore Exclude from docs
 * @param  {IGeoPoint}  geoPoint  Source geo-point
 * @return {IGeoPoint}            Normalized geo-point
 */
export function normalizePoint(geoPoint) {
    var longitude = wrapAngleTo180(geoPoint.longitude);
    var latitude = Math.asin(Math.sin((geoPoint.latitude * $math.RADIANS))) * $math.DEGREES;
    var latitude180 = wrapAngleTo180(geoPoint.latitude);
    if (Math.abs(latitude180) > 90) {
        longitude = wrapAngleTo180(longitude + 180);
    }
    geoPoint.longitude = longitude;
    geoPoint.latitude = latitude;
    return geoPoint;
}
/**
 * Normalizes all points of a geo-line.
 *
 * @ignore Exclude from docs
 * @param  {IGeoPoint[][]}  multiline  Source geo-line
 * @return {IGeoPoint[]}               Normalized geo-line
 */
export function normalizeMultiline(multiline) {
    try {
        for (var multiline_1 = __values(multiline), multiline_1_1 = multiline_1.next(); !multiline_1_1.done; multiline_1_1 = multiline_1.next()) {
            var segment = multiline_1_1.value;
            try {
                for (var segment_1 = __values(segment), segment_1_1 = segment_1.next(); !segment_1_1.done; segment_1_1 = segment_1.next()) {
                    var point = segment_1_1.value;
                    point = normalizePoint(point);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (segment_1_1 && !segment_1_1.done && (_a = segment_1.return)) _a.call(segment_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (multiline_1_1 && !multiline_1_1.done && (_b = multiline_1.return)) _b.call(multiline_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return multiline;
    var e_2, _b, e_1, _a;
}
/**
 * [wrapAngleTo180 description]
 *
 * @todo Description
 * @ignore Exclude from docs
 * @param  {number}  angle  Angle
 * @return {number}         Angle
 */
export function wrapAngleTo180(angle) {
    angle = angle % 360;
    if (angle > 180) {
        angle -= 360;
    }
    if (angle < -180) {
        angle += 360;
    }
    return angle;
}
/**
 * Converts a geo point to a regular point object.
 *
 * @ignore Exclude from docs
 * @param  {IGeoPoint}  geoPoint  Source geo point
 * @return {IPoint}               Point
 */
export function geoToPoint(geoPoint) {
    return { x: geoPoint.longitude, y: geoPoint.latitude };
}
//# sourceMappingURL=Geo.js.map