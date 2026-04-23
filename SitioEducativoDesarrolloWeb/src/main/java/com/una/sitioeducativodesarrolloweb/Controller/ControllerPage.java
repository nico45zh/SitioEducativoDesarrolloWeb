package com.una.sitioeducativodesarrolloweb.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerPage {

    @GetMapping("/")
    public String inicio() {
        return "Inicio";
    }

    @GetMapping("/Temas")
    public String temas() {
        return "Temas";
    }

    @GetMapping("/Cuestionarios")
    public String Cuestionarios() {
        return "Cuestionarios";
    }

    @GetMapping("/Acercade")
    public String Acercade() {
        return "Acercade";
    }

}
