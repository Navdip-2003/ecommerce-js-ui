import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';
import { createRoot } from "react-dom/client";

const RetailerDashboard = () => {
    // Sample data
    const data = {
        completeOrders: 120,
        pendingOrders: 35,
        totalProducts: 150,
        totalIncome: "₹12,000",
    };

    const chartData1 = [
        { asset: "Men", amount: 6500 },
        { asset: "Women", amount: 5150 },
        { asset: "Kids", amount: 1670 },
    ];

    const chartData2Mens = [
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

    const chartData2Women = [
        {
            weeks: "1st Week",
            order: 21,
          },
          {
            weeks: "2nd Week",
            order: 22,
          },
          {
            weeks: "3rd Week",
            order: 26,
          },
          {
            weeks: "4th Week",
            order: 24,
          }
    ];

    const chartData2Kids = [
        {
            weeks: "1st Week",
            order: 22,
          },
          {
            weeks: "2nd Week",
            order: 26,
          },
          {
            weeks: "3rd Week",
            order: 24,
          },
          {
            weeks: "4th Week",
            order: 29,
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
          text: "Monthly Orders",
        },
        series: [
          {
            data: chartData2Mens,
            xKey: "weeks",
            yKey: "order",
            yName: "Mens",
          },
          {
            data: chartData2Women,
            xKey: "weeks",
            yKey: "order",
            yName: "Womens",
          },
          {
            data: chartData2Kids,
            xKey: "weeks",
            yKey: "order",
            yName: "Kids",
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
            <h1 style={styles.header}>Dashboard</h1>

            {/* Stat Boxes */}
            <div style={styles.statsContainer}>
                {[
                    { label: "Complete Orders", value: data.completeOrders },
                    { label: "Pending Orders", value: data.pendingOrders },
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

export default RetailerDashboard