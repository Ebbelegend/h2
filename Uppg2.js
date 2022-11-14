const test_curve =
    t => make_point(t, 0.5 + (math_sin(4 * (math_PI * t)) / 2));

function stack_frac(frac, c1, c2) {
    
    
    
    const curvenr1 = t => make_point(x_of(c1(t)), y_of(c1(t)));
    
    
    
    const curvenr2 = t => make_point(x_of(c2(t)), y_of(c2(t)) + 1);
    
    const scaling_curvenr1 = scale(1, 0.6, 1)(curvenr1);
    
    const scaling_curvenr2 = scale(1, 0.5, 1)(curvenr2);
    
    const curves = connect_rigidly(scaling_curvenr2, scaling_curvenr1);
    
    return t => make_point(x_of(curves(t)), y_of(curves(t)));
}

// Test
draw_points(10000)
    (stack_frac(1 / 5,
                test_curve,
                stack_frac(1 / 2, test_curve, test_curve)));
