package com.example.boat1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat1.model.Booking;
import com.example.boat1.service.BookingService;
@RestController
@CrossOrigin
public class BookingController {
    @Autowired
    BookingService stuService1;
    @PostMapping("/adds")
    public Booking addinfo(@RequestBody Booking st) {
        return stuService1.saveDetails(st);
    }
    @GetMapping("/getBooking")
    public List<Booking> fetchDetails(){
        return stuService1.getDetails();
    }
    @PutMapping("/updates")
    public Booking updateInfo (@RequestBody Booking st1 ) {
        return stuService1.updateDetails(st1);
    }
    @DeleteMapping("/deletes/{id}")
    public String deleteInfo(@PathVariable("id") int id) {
        stuService1.deleteDetails(id);
        return "Details deleted success";
    }
}
