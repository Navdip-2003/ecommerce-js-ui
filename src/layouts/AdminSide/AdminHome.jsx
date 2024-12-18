import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';
import { createRoot } from "react-dom/client";

const AdminDashboard = () => {
    // Sample data
    const data = {
        totalUsers: 1280,
        totalRetailers: 59,
        totalProducts: 850,
        totalIncome: "₹12,56,830",
    };

    const chartData1 = [
        { asset: "1st Week", amount: 6500 },
        { asset: "2nd Week", amount: 5150 },
        { asset: "3rd Week", amount: 1670 },
        { asset: "4th Week", amount: 1670 },
    ];

    const chartData2Users = [
        {
            weeks: "1st Week",
            order: 25,
          },
          {
            weeks: "2nd Week",
            order: 24,
          },
          {
            weeks: "3rd Week",
            order: 27,
          },
          {
            weeks: "4th Week",
            order: 23,
          }
    ];
    
    const chartData2Retailers = [
        {
            weeks: "1st Week",
            order: 5,
          },
          {
            weeks: "2nd Week",
            order: 8,
          },
          {
            weeks: "3rd Week",
            order: 12,
          },
          {
            weeks: "4th Week",
            order: 3,
          }
    ];

    const [option1] = useState({
        data: chartData1,
        title: {
            text: "Monthly Income",
        },
        series: [
            {
                type: "donut",
                calloutLabelKey: "asset",
                angleKey: "amount",
                innerRadiusRatio: 0.7,
            },
        ],
    });

    const [option2] = useState({
        title: {
          text: "Monthly Users",
        },
        series: [
          {
            data: chartData2Users,
            xKey: "weeks",
            yKey: "order",
            yName: "Users",
          },
          {
            data: chartData2Retailers,
            xKey: "weeks",
            yKey: "order",
            yName: "Reatailers",
          },
        ],
        axes: [
          {
            type: "text",
            position: "bottom",
          },
          {
            type: "number",
            position: "left",
          },
        ],
      });
    

    return (
        <div style={styles.container}>
            {/* Header */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Dashboard
            </h1>

            {/* Stat Boxes */}
            <div style={styles.statsContainer}>
                {[
                    { label: "Total Users", value: data.totalUsers },
                    { label: "Total Retailers", value: data.totalRetailers },
                ].map((stat, index) => (
                    <div key={index} style={styles.statBox}>
                        <h3 style={styles.statValue}>{stat.value}</h3>
                        <p style={styles.statLabel}>{stat.label}</p>
                    </div>
                ))}
            </div>
            <div style={styles.statsContainer}>
                {[
                    { label: "Total Products", value: data.totalProducts },
                    { label: "Total Income", value: data.totalIncome },
                ].map((stat, index) => (
                    <div key={index} style={styles.statBox}>
                        <h3 style={styles.statValue}>{stat.value}</h3>
                        <p style={styles.statLabel}>{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Graph Section */}
            <div style={styles.graphContainer}>
                <div style={styles.graphBox}>
                    <AgCharts options={option1} style={styles.chart} />
                </div>
            </div>
            <div style={styles.graphContainer}>
                <div style={styles.graphBox}>
                    <AgCharts options={option2} style={styles.chart} />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
    },
    header: {
        textAlign: "center",
        marginBottom: "30px",
        color: "#333",
        fontSize: '25px',
    },
    statsContainer: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "30px",
    },
    statBox: {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        flex: "1",
        margin: "0 10px",
    },
    statValue: {
        fontSize: "24px",
        color: "#2c3e50",
        margin: "0 0 10px 0",
    },
    statLabel: {
        fontSize: "16px",
        color: "#7f8c8d",
        margin: 0,
    },
    graphContainer: {
        display: "flex",
        justifyContent: "space-around",
    },
    graphBox: {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        height: "350px",
        flex: "1",
        margin: "10px 10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#7f8c8d",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    chart: {
        width: "90%",
        height: "90%",
    },
};

export default AdminDashboard