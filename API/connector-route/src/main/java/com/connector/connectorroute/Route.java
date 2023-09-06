package com.connector.connectorroute;

public class Route {
    public int id;
    public int incon;
    public String inmsg;
    public int outcon;
    public String outmsg;

    public Route(int id, int incon, String inmsg, int outcon, String outmsg) {
        this.id = id;
        this.incon = incon;
        this.inmsg = inmsg;
        this.outcon = outcon;
        this.outmsg = outmsg;
    }   
}
