import React from 'react';
import MaterialTable from 'material-table';

import { LinkedDataIdentifier } from '../../Common';

import { WalletContentDetails } from '../WalletContentDetails';

// TODO: fix walletState so it does not get mutated params...
export const ContentsTable = ({ label, walletState }: any) => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    setRows(walletState.contents);
  }, [walletState]);
  const columns: any = [
    {
      title: 'Type',
      field: 'type',
      render: (rowData: any) => {
        return Array.isArray(rowData.type) ? rowData.type[0] : rowData.type;
      },
    },
    {
      title: 'Identifier',
      field: 'id',
      render: (rowData: any) => {
        if (rowData.id) {
          return <LinkedDataIdentifier value={rowData.id} />;
        }
        return <LinkedDataIdentifier value={rowData.proof.challenge} />;
      },
    },
  ];

  return (
    <MaterialTable
      style={{ width: '100%' }}
      title={label || 'Contents'}
      columns={columns}
      data={rows}
      detailPanel={(rowData: any) => {
        const withoutMutation: any = { ...rowData };
        delete withoutMutation.tableData;
        return <WalletContentDetails document={withoutMutation} />;
      }}
    />
  );
};
