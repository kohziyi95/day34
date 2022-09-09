package com.vttp.day34.models;

import java.io.StringReader;
import java.util.logging.Logger;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

public class Registration {
    private static Logger logger = Logger.getLogger(Registration.class.getName());

    private String id;
    private String name;
    private String email;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static Registration create(String json) {
        JsonReader jsonReader = Json.createReader(new StringReader(json));
        JsonObject object = jsonReader.readObject();
        Registration r = new Registration();
        r.setName(object.getString("name"));
        r.setEmail(object.getString("email"));

        try {
            r.setId(object.getString("id"));
        } catch (Exception ex) {
            ex.getMessage();
            logger.info("No ID found.");
        }

        return r;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
                .add("id", id)
                .add("name", name)
                .add("email", email)
                .build();
    }
}
