import React from 'react';
import {
  VerifiableCredentialPreview,
  IVerifiableCredentialPreviewProps,
} from '.';

export default {
  // id: 20,
  title: 'VC/Credential',
  component: VerifiableCredentialPreview,
};

const smallList = [
  {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://w3c-ccg.github.io/vc-examples/covid-19/v2/v2.jsonld',
    ],
    id: 'http://example.com/credential/123',
    type: ['VerifiableCredential', 'qSARS-CoV-2-Rapid-Test-Credential'],
    issuer: {
      id: 'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg',
      location: {
        '@type': 'CovidTestingFacility',
        name: 'Stanford Health Care',
        url: 'https://stanfordhealthcare.org/',
      },
    },
    issuanceDate: '2019-12-11T03:50:55Z',
    expirationDate: '2020-12-11T03:50:55Z',
    name: 'qSARS-CoV-2 IgG/IgM Rapid Test Credential',
    description:
      'Results from antibody testing should not be used as the sole basis to diagnose or exclude SARS-CoV-2 infection. False positive results may occur due to cross-reacting antibodies from previous infections, such as other coronaviruses, or from other causes Samples with positive results should be confirmed with alternative testing method(s) and clinical findings before a diagnostic determination is made.',
    credentialSubject: {
      id: 'did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd',
      type: ['qSARS-CoV-2-Rapid-Test-Credential'],
      catalogNumber: '5515C025, 5515C050, 5515C100',
      ifu:
        'https://cellexcovid.com/wp-content/uploads/2020/04/Cellex-rapid-ifu.pdf',
      assay: 'Negative',
    },
    proof: {
      type: 'Ed25519Signature2018',
      created: '2020-04-18T18:35:13Z',
      verificationMethod:
        'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg#xqc3gS1gz1vch7R3RvNebWMjLvBOY-n_14feCYRPsUo',
      proofPurpose: 'assertionMethod',
      jws:
        'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..xnB7m8M6TcAFmz2efqb74IyJECUTAMpCkJAudfmVkLC3CPmCrMznvlD2E7WCCkzF9nnrZlJw0VpHdXJpjEU-AQ',
    },
  },
];

export const Preview = (props?: Partial<IVerifiableCredentialPreviewProps>) => (
  <div>
    <VerifiableCredentialPreview document={smallList[0]} {...props} />
  </div>
);
