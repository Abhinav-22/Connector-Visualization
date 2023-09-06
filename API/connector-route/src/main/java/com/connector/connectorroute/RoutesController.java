package com.connector.connectorroute;

import java.util.List;
import java.util.Arrays;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class RoutesController {

    static final List<Route> routeList=Arrays.asList(
        new Route(0,1,"A",2,"B"),
        new Route(1,2,"B",3,"C"),
        new Route(2,3,"C",4,"D"),
        new Route(3,4,"D",5,"E"),
        new Route(4,5,"E",6,"F")
    );

    @GetMapping("/routes")
    public List<Route> getRoutes(){
        return routeList;
    }
}
