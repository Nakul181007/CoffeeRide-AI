/**
 * CoffeeRide AI - Market Mobility Datasets & AI Reasoning Context
 * 
 * GEN AI APAC SUBMISSION DATA MODEL & ARCHITECTURE
 * 
 * Target Production Datasets:
 * - `bigquery-public-data.new_york.citibike_trips` (Production target dataset)
 * - `bigquery-public-data.new_york.citibike_stations` (Production target dataset)
 */

export const MARKETS_DATA = {
  "New York City": {
    cityName: "New York City",
    state: "NY",
    datasetTrips: "bigquery-public-data.new_york.citibike_trips",
    datasetStations: "bigquery-public-data.new_york.citibike_stations",
    totalTripsAnalyzed: "3.84 Million Trips (Representative)",
    activeStations: "1,520 Stations",
    analysisTimestamp: "2026-08-31T20:35:00Z",
    marketType: "Cyclist-focused coffee shop",
    isDemoData: true,
    
    // Primary Top Recommendation
    mainRecommendation: {
      area: "Downtown Brooklyn",
      score: 91,
      maxScore: 100,
      status: "High Potential",
      demandLevel: "Very High",
      cyclingActivity: "High",
      tripStarts: "Strong (142k/mo)",
      tripEnds: "Strong (158k/mo)",
      reasons: [
        "High cycling activity across morning & evening commuting corridors",
        "Strong trip-start density near major transit hubs",
        "Strong trip-end density around major destinations",
        "Consistent mobility activity"
      ],
      aiReasoning: "Gemini interprets mobility signals and converts analytical results into an expansion recommendation. In the production version, these signals would be retrieved through BigQuery MCP from public mobility datasets."
    },

    // Key Insights Summary Cards
    insights: {
      cyclingActivity: "High",
      tripStarts: "Strong",
      tripEnds: "Strong",
      avgTripDuration: "14.2 mins",
      commutePeakWindow: "7:30 AM - 9:45 AM",
      demandIndicator: "Very High Demand"
    },

    // Top 5 Locations Ranked List
    topLocations: [
      {
        rank: 1,
        id: "downtown-brooklyn",
        name: "Downtown Brooklyn",
        score: 91,
        cyclingActivity: "High",
        demandLevel: "Very High",
        tripStartDensity: 94,
        tripEndDensity: 96,
        avgStationDistance: "85m",
        peakHourVolume: "12,400 trips / peak day",
        shortExplanation: "Top commuter intersection connecting Brooklyn Bridge & Flatbush Ave with massive morning stopover traffic.",
        fullAnalysis: "Downtown Brooklyn serves as the primary gateway for cyclists crossing into Manhattan and traversing South Brooklyn. High trip-start density at Jay St-MetroTech (142k trips/mo) aligns perfectly with morning espresso buying habits."
      },
      {
        rank: 2,
        id: "williamsburg",
        name: "Williamsburg",
        score: 87,
        cyclingActivity: "High",
        demandLevel: "High",
        tripStartDensity: 89,
        tripEndDensity: 91,
        avgStationDistance: "110m",
        peakHourVolume: "10,800 trips / peak day",
        shortExplanation: "Dense leisure & creative worker network along Bedford Ave with high weekend cyclist retention.",
        fullAnalysis: "Williamsburg exhibits high weekend cyclist mobility alongside remote-worker coffee consumption. High density of trip-ends near Domino Park and Bedford Ave station makes it an exceptional secondary target."
      },
      {
        rank: 3,
        id: "lower-manhattan",
        name: "Lower Manhattan",
        score: 84,
        cyclingActivity: "Moderate-High",
        demandLevel: "High",
        tripStartDensity: 88,
        tripEndDensity: 85,
        avgStationDistance: "60m",
        peakHourVolume: "9,600 trips / peak day",
        shortExplanation: "Financial District & Fulton Center hub with intense 8:00 AM trip-end convergence.",
        fullAnalysis: "Lower Manhattan experiences heavy morning trip arrival traffic as commuters dock bikes near Wall St and Maiden Lane. Ideal for grab-and-go espresso kiosks."
      },
      {
        rank: 4,
        id: "long-island-city",
        name: "Long Island City",
        score: 81,
        cyclingActivity: "Moderate",
        demandLevel: "Medium-High",
        tripStartDensity: 79,
        tripEndDensity: 84,
        avgStationDistance: "140m",
        peakHourVolume: "7,900 trips / peak day",
        shortExplanation: "Rapidly expanding waterfront bike lane arterial with surging year-over-year rider growth.",
        fullAnalysis: "Long Island City shows a 34% YoY growth in Citi Bike trip origins along Vernon Blvd. High growth potential with lower commercial real estate lease rates than Manhattan."
      },
      {
        rank: 5,
        id: "chelsea",
        name: "Chelsea",
        score: 78,
        cyclingActivity: "Moderate",
        demandLevel: "Medium",
        tripStartDensity: 81,
        tripEndDensity: 76,
        avgStationDistance: "95m",
        peakHourVolume: "7,200 trips / peak day",
        shortExplanation: "Hudson River Park greenway exit node with steady afternoon recreational cyclist flow.",
        fullAnalysis: "Chelsea benefits from proximity to the Hudson River Greenway. Highly consistent weekend flow for specialty cold brew and high-end cyclist pit-stops."
      }
    ],

    // Target Production SQL payload
    bigQuerySql: `-- Target BigQuery dataset SQL query
SELECT 
  t.start_station_name,
  t.end_station_name,
  COUNT(*) as total_trips,
  AVG(t.tripduration / 60) as avg_duration_minutes,
  s.capacity as start_station_capacity
FROM 
  \`bigquery-public-data.new_york.citibike_trips\` t
JOIN
  \`bigquery-public-data.new_york.citibike_stations\` s
ON 
  t.start_station_id = CAST(s.station_id AS STRING)
WHERE 
  t.starttime >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 90 DAY)
GROUP BY 
  1, 2, 5
ORDER BY 
  total_trips DESC
LIMIT 50;`
  }
};

/**
 * EXACT 6-Step AI Agent Analysis Sequence
 */
export const ANALYSIS_STEPS = [
  { 
    id: 1, 
    label: "Connecting to mobility data...", 
    detail: "Targeting bigquery-public-data.new_york.citibike_trips & citibike_stations via BigQuery MCP...", 
    icon: "Database" 
  },
  { 
    id: 2, 
    label: "Inspecting cycling activity...", 
    detail: "Processing spatial unlock density, trip origins, and destination docking flows...", 
    icon: "Bike" 
  },
  {
    id: 3,
    label: "Analyzing trip origins and destinations...",
    detail: "Clustering trip-start and trip-end coordinates across major urban corridors...",
    icon: "MapPin"
  },
  { 
    id: 4, 
    label: "Calculating cyclist opportunity scores...", 
    detail: "Computing Cyclist Opportunity Score (COI) matrix for top urban corridors...", 
    icon: "Calculator" 
  },
  { 
    id: 5, 
    label: "Gemini is reasoning over the evidence...", 
    detail: "Synthesizing spatial mobility indices into retail expansion intelligence...", 
    icon: "Brain" 
  },
  { 
    id: 6, 
    label: "Generating expansion recommendation...", 
    detail: "Finalizing ranked location output and commercial strategic drivers...", 
    icon: "CheckCircle" 
  }
];

/**
 * How It Works 3-Step Structure
 */
export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "DISCOVER",
    description: "Gemini interprets the business expansion question and determines which mobility signals are relevant."
  },
  {
    step: "02",
    title: "ANALYZE",
    description: "BigQuery MCP is designed to provide natural-language access to BigQuery datasets and execute analytical SQL."
  },
  {
    step: "03",
    title: "RECOMMEND",
    description: "Gemini interprets the analytical output and generates a ranked location recommendation."
  }
];
