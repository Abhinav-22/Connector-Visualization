/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.connector.connectorroute.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author thomasjacob
 */
public class ConnectorManager {
    
    HashMap<Integer, Connector> connectorMap = new HashMap<Integer, Connector>();
    int no_of_connectors = 6;
    
    public ConnectorManager() {
        for(int i = 0; i < no_of_connectors; i++){
            Connector currObj = new Connector(i+1, i+1);
            connectorMap.put(currObj.getConnector_id(), currObj);
        }
    }
    
    public List<Connector> getAllConnectors(){
        List<Connector> connectorList = new ArrayList<Connector>();
        
        for (Map.Entry<Integer, Connector> entry : connectorMap.entrySet()) {
            Connector connector = entry.getValue();
            connectorList.add(connector);
        }
        return connectorList;
    }
    
    public Connector getConnector(int connectorId){
        return connectorMap.get(connectorId);
    }
}
