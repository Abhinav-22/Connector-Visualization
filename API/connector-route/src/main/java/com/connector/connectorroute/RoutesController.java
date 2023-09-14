package com.connector.connectorroute;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class RoutesController {

    static final List<Route> routeList = Arrays.asList(
        new Route("route 0", "1", "A", "2", "B"),
        new Route("route 1", "1", "A", "2", "C"),
        new Route("route 2", "2", "B", "3", "D"),
        new Route("route 3", "2", "C", "4", "E"),
        new Route("route 4", "3", "D", "-1", "X"),
        new Route("route 5", "4", "D", "-1", "X")

    );

    @GetMapping("/routes")
    public List<Route> getRoutes() {
        return routeList;
    }

    
}
