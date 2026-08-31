# CoffeeRide AI

## Overview

CoffeeRide AI is a data-driven GenAI expansion agent designed to help coffee businesses identify cyclist-friendly locations for new stores.

---

## Problem

Coffee-shop expansion decisions often require combining mobility patterns, geographic information and demand signals manually.

---

## Solution

CoffeeRide AI combines Gemini reasoning with BigQuery MCP and public cycling mobility datasets to transform raw mobility signals into ranked expansion recommendations.

---

## Core Technologies

- Gemini
- BigQuery
- BigQuery MCP Server
- Public Citi Bike Dataset
- React
- Tailwind CSS
- JavaScript

---

## Architecture

```
User → Gemini → BigQuery MCP → Public Citi Bike Dataset → SQL Analytics → Opportunity Score → Gemini Reasoning → Recommendation
```

---

## Opportunity Score

The Cyclist Opportunity Score (0–100) is a weighted decision-support metric calculated as follows:

- **50% Cycling Activity**: Overall volume and density of cycling movement within the target corridor.
- **25% Trip Starts**: Density of trip origin unlocks near transit hubs during morning commute hours.
- **15% Trip Ends**: Density of trip destination dockings near commercial districts.
- **10% Activity Consistency**: Ride traffic volume stability across weekdays and weekends.

*Note: The Cyclist Opportunity Score is a decision-support score designed to aid spatial evaluation and is not a guarantee of commercial success.*

---

## Prototype Status

The current user interface displays representative/demo results because local BigQuery MCP authentication is not configured in the submission frontend environment. The production architecture is designed for live BigQuery MCP integration with public BigQuery mobility datasets (`bigquery-public-data.new_york.citibike_trips` and `bigquery-public-data.new_york.citibike_stations`).

---

## Future Improvements

- Live BigQuery MCP authentication
- Real-time public mobility analysis
- Multi-city expansion
- Competitor density integration
- Commercial rent data overlay
- Pedestrian activity signals
- Weather impact modeling
- Advanced geospatial vector analysis
- Additional public datasets (e.g. subway turnstiles, bus transit, foot traffic)
