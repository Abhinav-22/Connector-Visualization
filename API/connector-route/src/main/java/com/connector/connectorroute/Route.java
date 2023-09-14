package com.connector.connectorroute;

public class Route {
    public String id;
    public String source;
    public String inmsg;
    public String target;
    public String outmsg;


    public Route(String id,String source,String inmsg,String target,String outmsg) {
        this.id = id;
        this.source=source;
        this.target=target;
        this.inmsg=inmsg;
        this.outmsg=outmsg;
    }   
}
