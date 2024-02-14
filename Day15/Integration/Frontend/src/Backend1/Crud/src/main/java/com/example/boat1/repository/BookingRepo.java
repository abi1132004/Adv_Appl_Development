package com.example.boat1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boat1.model.Booking;


public interface BookingRepo extends JpaRepository <Booking, Integer>{
    
}
