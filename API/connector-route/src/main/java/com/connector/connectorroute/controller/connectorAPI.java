/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.connector.connectorroute.controller;

import com.connector.connectorroute.model.Connector;
import com.connector.connectorroute.model.ConnectorManager;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author thomasjacob
 */

@RestController
@RequestMapping("/connector")
public class connectorAPI {
    
    ConnectorManager cm = new ConnectorManager();
    
    @GetMapping("/getAllConnectors")
    public List<Connector> getAllConnectors(){
        return cm.getAllConnectors();
    }
    @GetMapping("/getConnector")
    public Connector getConnector(@RequestParam("connectorId")String connectorId){
        return cm.getConnector(Integer.parseInt(connectorId));
    }
    
}