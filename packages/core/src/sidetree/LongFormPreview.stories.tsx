import React from 'react';

import { LongFormPreview } from '..';

export default {
  title: 'Sidetree/DID',
  component: LongFormPreview,
};

const example =
  'did:elem:EiByThmMfut8K5y6Bv7Qk9-8k8HUcGD3ebbeAbLsZo3VSA?-elem-initial-state=eyJkZWx0YV9oYXNoIjoiRWlEdlBwR3NyZ3pOSG1vUkNaSE1pUTZ5TTJ5TFVqUTZla2lRSkMtM2lycFR0ZyIsInJlY292ZXJ5X2NvbW1pdG1lbnQiOiJFaUI5RFBzY3NuS2dsNVJqX2JLU0pONTVQWTJ3TWV2S1JiSDFlb1ZEeGd2TGNRIn0.eyJ1cGRhdGVfY29tbWl0bWVudCI6IkVpQ2t6LW50TVVmbV90WjRKeTYzYmVwa1ZfWl9CR0xveFhZaG9hbGNKZ0JSUkEiLCJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXkyIiwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSIsImp3ayI6eyJrdHkiOiJFQyIsImNydiI6InNlY3AyNTZrMSIsIngiOiI3cFE4UGRsUm5OZmlaWU9HdmpLdzlrdFJxN1FoQWZtLWVSck1vVERrd2VjIiwieSI6ImpabEI1QmZKZGt3dGhXM3VIZ1UwVDhZaDJEbDFwdkFNQkZzTUxDeXNIT00ifSwicHVycG9zZSI6WyJhdXRoIiwiZ2VuZXJhbCJdfV0sInNlcnZpY2VFbmRwb2ludHMiOlt7ImlkIjoic2VydmljZUVuZHBvaW50SWQxMjMiLCJ0eXBlIjoic29tZVR5cGUiLCJlbmRwb2ludCI6Imh0dHBzOi8vd3d3LnVybC5jb20ifV19fV19';

export const LongForm = (props?: Partial<any>) => (
  <div style={{ padding: '8px' }}>
    <LongFormPreview value={example} {...props} />
  </div>
);
