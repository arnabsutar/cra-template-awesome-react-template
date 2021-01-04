/* eslint-disable react/forbid-prop-types */
/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import _ from 'lodash-es';

const DataGrid = (props) => {
  const { dataSource, tableMetaData, onTableMetaDataChange } = props;

  const [metaData, setMetaData] = useState(tableMetaData);
  // const [initialMetaData, setInitialMetaData] = useState(_.cloneDeep(tableMetaData));
  // const bodyTemplate = (rowData)
  const dynamicColumns = metaData
    .getColumns()
    .filter((col) => col.visibility)
    .map((col) => (
      <Column
        columnKey={col.id}
        key={col.id}
        field={col.dataField}
        header={col.header}
        style={{ width: col.width }}
        {...(col.sortable ? { sortable: true } : {})}
        {...(col.body ? { body: col.body } : {})}
      />
    ));

  const onColumnResizeHandler = (event) => {
    const columnInAction = metaData
      .getColumns()
      .find((col) => col.id === event.column.columnKey);
    if (columnInAction) {
      columnInAction.width = `${event.element.clientWidth}px`;
      setMetaData(metaData);
      if (onTableMetaDataChange) {
        onTableMetaDataChange(metaData);
      }
    }
  };

  return (
    <DataTable
      value={dataSource}
      scrollable
      {...(metaData.isColumnResizable
        ? {
          resizableColumns: true,
          onColumnResizeEnd: onColumnResizeHandler,
        }
        : {})}
    >
      {dynamicColumns}
    </DataTable>
  );
};

DataGrid.propTypes = {
  dataSource: PropTypes.array.isRequired,
  tableMetaData: PropTypes.any.isRequired,
  totalRowCount: PropTypes.number,
  // events
  onTableMetaDataChange: PropTypes.func,
  onFilter: PropTypes.func,
  onSort: PropTypes.func,
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  onSelection: PropTypes.func,
};

DataGrid.defaultProps = {
  totalRowCount: 0,
  onTableMetaDataChange: null,
  onFilter: null,
  onSort: null,
  onPageChange: null,
  onPageSizeChange: null,
  onSelection: null,
};
export default DataGrid;
