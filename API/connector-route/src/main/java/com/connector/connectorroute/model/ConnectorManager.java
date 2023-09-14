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

    HashMap<String, Connector> connectorMap = new HashMap<String, Connector>();
    int no_of_connectors = 9;

    public ConnectorManager() {
        for (int i = 0; i < no_of_connectors; i++) {
            Connector currObj = new Connector(String.valueOf(i), "node " + i);
            connectorMap.put(currObj.getId(), currObj);
        }
    }

    public List<Connector> getAllConnectors() {
        List<Connector> connectorList = new ArrayList<Connector>();

        for (Map.Entry<String, Connector> entry : connectorMap.entrySet()) {
            Connector connector = entry.getValue();
            connectorList.add(connector);
        }
        return connectorList;
    }

    public Connector getConnector(int connectorId) {
        return connectorMap.get(connectorId);
    }
}
