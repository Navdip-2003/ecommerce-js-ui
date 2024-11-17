import React from 'react';

function RetailerFooter() {
  return (
    <footer style={styles.footer}>
            Copyright © 2024 Shivay Cloths. All Rights Reserved.
    </footer>
  );
};

const styles = {
    footer: {
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        padding: '10px 0',
        fontSize: '14px',
        borderTop: '1px solid #ccc',
      },
}

export default RetailerFooter;
