package com.soojip.auction.service.controller;

import com.soojip.auction.service.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class ServiceRestController {

    @Autowired
    private AuctionService service;

    @GetMapping(value = "/{auctionNo}/init")
    public Object getAuctionInitInfo(@PathVariable() String auctionNo) {

        return "hello?";
    }

    @GetMapping(value = "/{auctionNo}/{productNo}/bid")
    public Object bidAuction(@PathVariable() String auctionNo,
                             @PathVariable() String productNo) {

        return "hello?2222";
//        return null;
    }
}
