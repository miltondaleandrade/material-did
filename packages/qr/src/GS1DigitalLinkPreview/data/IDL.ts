export const IDL = [
  {
    code: '1337',
    label: 'Decentralized Identifier (DID)',
    keyQualifiers: [],
    ruleName: 'did-value',
  },

  {
    code: '00',
    label: 'Serial Shipping Container Code (SSCC)',
    keyQualifiers: [],
    ruleName: 'sscc-value',
  },
  {
    code: '01',
    label: 'Global Trade Item Number (GTIN)',
    keyQualifiers: ['22', '10', '21'],
    ruleName: 'gtin-value',
  },
  {
    code: '253',
    label: 'Global Document Type Identifier (GDTI)',
    keyQualifiers: [],
    ruleName: 'gdti-value',
  },
  {
    code: '255',
    label: 'Global Coupon Number (GCN)',
    keyQualifiers: [],
    ruleName: 'gcn-value',
  },
  {
    code: '401',
    label: 'Global Identification Number for Consignment (GINC)',
    keyQualifiers: [],
    ruleName: 'ginc-value',
  },
  {
    code: '402',
    label: 'Global Shipment Identification Number (GSIN)',
    keyQualifiers: [],
    ruleName: 'gsin-value',
  },
  {
    code: '414',
    label: 'Identification of a physical location - Global Location Number',
    keyQualifiers: ['254'],
    ruleName: 'gln-value',
  },
  {
    code: '415',
    label: 'Global Location Number of the invoicing party',
    keyQualifiers: [],
    ruleName: 'payTo-value',
  },
  {
    code: '8003',
    label: 'Global Returnable Asset Identifier (GRAI)',
    keyQualifiers: [],
    ruleName: 'grai-value',
  },
  {
    code: '8004',
    label: 'Global Individual Asset Identifier (GIAI)',
    keyQualifiers: [],
    ruleName: 'giai-value',
  },
  {
    code: '8006',
    label: 'Identification of an individual trade item piece',
    keyQualifiers: ['22', '10', '21'],
    ruleName: 'itip-value',
  },
  {
    code: '8010',
    label: 'Component/Part Identifier (CPID)',
    keyQualifiers: ['8011'],
    ruleName: 'cpid-value',
  },
  {
    code: '8017',
    label: 'Global Service Relation Number - Provider',
    keyQualifiers: ['8017'],
    ruleName: 'gsrnp-value',
  },
  {
    code: '8018',
    label: 'Global Service Relation Number - Recipient',
    keyQualifiers: ['8017'],
    ruleName: 'gsrnp-value',
  },
];
