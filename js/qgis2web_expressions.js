// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_RailLines_0rule1_eval_expression(context) {
    // Status = 'Proposed'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Proposed');
    } else {
        return (feature['Status']  == 'Proposed');
    }
}


function exp_RailLines_0rule1_eval_expression(context) {
    // Status = 'Proposed'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Proposed');
    } else {
        return (feature['Status']  == 'Proposed');
    }
}


function exp_LocalRoads_2rule0_eval_expression(context) {
    // Status = 'Existing'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Existing');
    } else {
        return (feature['Status']  == 'Existing');
    }
}


function exp_LocalRoads_2rule1_eval_expression(context) {
    // Status = 'Construction'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Construction');
    } else {
        return (feature['Status']  == 'Construction');
    }
}


function exp_LocalRoads_2rule2_eval_expression(context) {
    // Status = 'Full'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Full');
    } else {
        return (feature['Status']  == 'Full');
    }
}


function exp_LocalRoads_2rule3_eval_expression(context) {
    // Status = 'Outline'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Outline');
    } else {
        return (feature['Status']  == 'Outline');
    }
}


function exp_LocalRoads_2rule4_eval_expression(context) {
    // Planning = 'SGP' AND Status = 'option1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Planning']  == 'SGP') && (feature.properties['Status']  == 'option1'));
    } else {
        return ((feature['Planning']  == 'SGP') && (feature['Status']  == 'option1'));
    }
}


function exp_LocalRoads_2rule5_eval_expression(context) {
    // Planning = 'SGP' AND Status = 'option'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Planning']  == 'SGP') && (feature.properties['Status']  == 'option'));
    } else {
        return ((feature['Planning']  == 'SGP') && (feature['Status']  == 'option'));
    }
}


function exp_LocalRoads_2rule6_eval_expression(context) {
    // Status = 'Proposed'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Proposed');
    } else {
        return (feature['Status']  == 'Proposed');
    }
}


function exp_label_ResidentialUnapproved_12_eval_expression(context) {
    // if(Dwellings > 0, Dwellings || ' d', if("Local Plan" > '', "Local Plan", ''))

    var feature = context.feature;
    
    if (feature.properties) {
        return fnc_if([(feature.properties['Dwellings']  > 0),(feature.properties['Dwellings']  + ' d'),fnc_if([(feature.properties['Local Plan']  > ''),feature.properties['Local Plan'] ,''], context)], context);
    } else {
        return fnc_if([(feature['Dwellings']  > 0),(feature['Dwellings']  + ' d'),fnc_if([(feature['Local Plan']  > ''),feature['Local Plan'] ,''], context)], context);
    }
}


function exp_ResidentialUnapproved_12rule0_eval_expression(context) {
    // Status = 'Full Pending'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Full Pending');
    } else {
        return (feature['Status']  == 'Full Pending');
    }
}


function exp_ResidentialUnapproved_12rule1_eval_expression(context) {
    // Status = 'Outline'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Outline');
    } else {
        return (feature['Status']  == 'Outline');
    }
}


function exp_ResidentialUnapproved_12rule2_eval_expression(context) {
    // Status = 'OL Pending'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'OL Pending');
    } else {
        return (feature['Status']  == 'OL Pending');
    }
}


function exp_ResidentialUnapproved_12rule3_eval_expression(context) {
    // Status = 'Proposed'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Status']  == 'Proposed');
    } else {
        return (feature['Status']  == 'Proposed');
    }
}


function exp_ResidentialApproved_13rule0_eval_expression(context) {
    // PP_YR < 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['PP_YR']  < 2000);
    } else {
        return (feature['PP_YR']  < 2000);
    }
}


function exp_ResidentialApproved_13rule1_eval_expression(context) {
    // PP_YR >= 2000 AND PP_YR < 2005

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['PP_YR']  >= 2000) && (feature.properties['PP_YR']  < 2005));
    } else {
        return ((feature['PP_YR']  >= 2000) && (feature['PP_YR']  < 2005));
    }
}


function exp_ResidentialApproved_13rule2_eval_expression(context) {
    // PP_YR >= 2005 AND PP_YR < 2010

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['PP_YR']  >= 2005) && (feature.properties['PP_YR']  < 2010));
    } else {
        return ((feature['PP_YR']  >= 2005) && (feature['PP_YR']  < 2010));
    }
}


function exp_ResidentialApproved_13rule3_eval_expression(context) {
    // PP_YR >= 2010 AND PP_YR < 2015

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['PP_YR']  >= 2010) && (feature.properties['PP_YR']  < 2015));
    } else {
        return ((feature['PP_YR']  >= 2010) && (feature['PP_YR']  < 2015));
    }
}


function exp_ResidentialApproved_13rule4_eval_expression(context) {
    // PP_YR >= 2015 AND PP_YR < 2020

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['PP_YR']  >= 2015) && (feature.properties['PP_YR']  < 2020));
    } else {
        return ((feature['PP_YR']  >= 2015) && (feature['PP_YR']  < 2020));
    }
}


function exp_ResidentialApproved_13rule5_eval_expression(context) {
    // PP_YR >= 2020

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['PP_YR']  >= 2020);
    } else {
        return (feature['PP_YR']  >= 2020);
    }
}