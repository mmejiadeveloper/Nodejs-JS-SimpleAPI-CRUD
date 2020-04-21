module.exports = (model) => {
  const getRows = function () {
    return model.findAll().then((rows) => rows);
  };

  const getSingleRow = function (id) {
    return model.findOne({ where: { id } }).then((row) => row);
  };

  const saveRow = function (rowData) {
    return model.create(rowData).then((createdRow) => ({ status: 1, data: createdRow }));
  };

  const updateRow = function (rowData, conditions) {
    return model.update(rowData, conditions).then(() => ({ status: 1, data: 'Row updated' }));
  };

  const deleteRow = function (conditions) {
    return model.destroy(conditions).then(() => ({ status: 1, data: 'Row deleted' }));
  };

  return {
    getRows,
    getSingleRow,
    saveRow,
    updateRow,
    deleteRow,
  };
};
