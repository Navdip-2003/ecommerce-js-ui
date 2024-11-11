import React from 'react';

const TermsAndConditions = () => {

  const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#444'
  };

  const paragraphStyle = {
    marginBottom: '10px'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333'}}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', justifySelf: 'center'}}>Terms & Conditions</h1>

      <h2 style={sectionTitleStyle}>General</h2>
      <p style={paragraphStyle}>
        Unless otherwise agreed in writing and signed by the Director of Shivay Clothing Limited, all goods are
        supplied on these conditions to the exclusion of any terms or conditions of the buyer and of any representation,
        warranty, or communication not expressly included.
      </p>

      <h2 style={sectionTitleStyle}>Prices</h2>
      <p style={paragraphStyle}>
        Unless otherwise stated, all prices are net ex-Works and apply only to the total quantities and delivery dates or rates specified. Additional costs incurred by us on account of any alterations made at the buyer’s request to quantities, delivery dates, or rates or agreed changes in specifications shall be borne by the buyer.
      </p>
      <p style={paragraphStyle}>
        Prices are based on current costs at the date of quotation and are subject to increase due to changes in exchange rates, new or increased taxes, duties, or other imposts, or any increase in manufacturing or delivery costs.
      </p>
      <p style={paragraphStyle}>
        Prices are exclusive of VAT, which will be charged (where applicable) at the current rate at the time of delivery.
      </p>

      <h2 style={sectionTitleStyle}>Terms of Payment</h2>
      <p style={paragraphStyle}>
        Payment at net invoice price is due for INR trade 30 days after the invoice date. For export trade, payment terms are specified prior to order acceptance.
      </p>
      <p style={paragraphStyle}>
        Prompt payment of accounts is a condition precedent to further deliveries, and we reserve the right to charge interest at 5% per annum above the base rate from the Co-operative Bank.
      </p>

      <h2 style={sectionTitleStyle}>Delivery</h2>
      <p style={paragraphStyle}>
        The time and place of delivery shall be as specified in the buyer's order, subject to Condition 7 below. All delivery dates are estimates only unless guaranteed in writing.
      </p>

      <h2 style={sectionTitleStyle}>Cancellation</h2>
      <p style={paragraphStyle}>
        If the buyer cancels all or part of an order, they shall reimburse us for any incurred costs. Additional fees apply for late cancellations, especially for custom orders.
      </p>

      <h2 style={sectionTitleStyle}>Carriage and Package</h2>
      <p style={paragraphStyle}>
        The cost of carriage is extra unless specified. Special delivery requests or deliveries outside the mainland incur additional charges.
      </p>

      <h2 style={sectionTitleStyle}>Loss or Damage in Transit</h2>
      <p style={paragraphStyle}>
        We may repair or replace goods lost or damaged in transit, provided that the buyer notifies us within the specified timeframe.
      </p>

      <h2 style={sectionTitleStyle}>Passing of Property and Risk</h2>
      <p style={paragraphStyle}>
        Risk transfers to the buyer upon delivery, but we retain ownership until full payment. Buyers must store the goods safely and may resell them in the ordinary course of business.
      </p>

      <h2 style={sectionTitleStyle}>Defects</h2>
      <p style={paragraphStyle}>
        The buyer may return defective goods for replacement or refund, provided the defect is reported within 7 days of the invoice date.
      </p>

      <h2 style={sectionTitleStyle}>Liability</h2>
      <p style={paragraphStyle}>
        Our liability is limited to the conditions here, and we exclude liability for indirect or consequential loss.
      </p>

      <h2 style={sectionTitleStyle}>Indemnity</h2>
      <p style={paragraphStyle}>
        The buyer indemnifies us against claims of infringement arising from the buyer's designs or specifications.
      </p>

      <h2 style={sectionTitleStyle}>Catalogues</h2>
      <p style={paragraphStyle}>
        Illustrations in our catalogues are intended to present a general idea of products and are not contractual.
      </p>

      <h2 style={sectionTitleStyle}>Insolvency</h2>
      <p style={paragraphStyle}>
        If the buyer becomes insolvent, we have the right to terminate the contract by notice.
      </p>

      <h2 style={sectionTitleStyle}>Notices</h2>
      <p style={paragraphStyle}>
        Any notice by post, telegram, or email is deemed served when it would ordinarily reach its destination.
      </p>

      <h2 style={sectionTitleStyle}>Privacy Policy</h2>
      <p style={paragraphStyle}>
        We collect necessary information like name, email, billing address, and payment details for processing orders. Payment information is securely handled by a third-party provider, and we do not store payment data.
      </p>

      <h2 style={sectionTitleStyle}>Governing Law</h2>
      <p style={paragraphStyle}>
        These conditions are governed by English Law.
      </p>
    </div>
  );
};

export default TermsAndConditions;
