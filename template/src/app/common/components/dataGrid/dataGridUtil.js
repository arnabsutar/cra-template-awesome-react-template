import React from 'react';
import { Button } from 'primereact/button';

const dateBodyGenerator = (dateFormat) => {
  function dateBody(rowData, columnData) {
    console.log('Inside bodyGenarator ', rowData, columnData, dateFormat);
    return rowData[columnData.field];
  }
  return dateBody;
};

const actionBodyGenerator = (actions, isEnableChecker) => {
  function actionBody(rowData, columnData = null) {
    if (actions && actions.length < 1) {
      return '';
    }
    return (
      <>
        {
          actions.sort((i1, i2) => (i1 - i2)).map((action) => (
            <Button
              key={action.id}
              icon={action.icon}
              className="margin-r-5"
              onClick={() => action.actionHandler(rowData, columnData)}
              {...(isEnableChecker && !isEnableChecker(action, rowData, columnData)
                ? { disabled: true } : {})}
              label={action.name}
            />

          ))
        }
      </>
    );
  }

  return actionBody;
};

export { actionBodyGenerator, dateBodyGenerator };
