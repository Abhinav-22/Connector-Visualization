/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.connector.connectorroute.model;

/**
 *
 * @author thomasjacob
 */
public class Connector {
    private int id;
    private int connector_id;

    public Connector(int id, int connector_id) {
        this.id = id;
        this.connector_id = connector_id;
    }

    
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getConnector_id() {
        return connector_id;
    }

    public void setConnector_id(int connector_id) {
        this.connector_id = connector_id;
    }
}
