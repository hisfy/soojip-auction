package com.soojip.auction.service.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/auction")
public class ServiceViewController {


    @GetMapping(value = "/login")
    public ModelAndView login() {
        ModelAndView mav = new ModelAndView("service/login");
        return mav;
    }

    @GetMapping(value = "/main")
    public ModelAndView mainPage() {
        ModelAndView mav = new ModelAndView("service/main");
        return mav;
    }
}
