'use strict';

module.exports = function (sequelize, DataTypes) {
  var product = sequelize.define('product', {
    categoryId: DataTypes.INTEGER,
    subCategoryId: DataTypes.INTEGER,
    childCategoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    brand: DataTypes.STRING,
    unitSize: DataTypes.STRING,
    status: DataTypes.STRING,
    buyerPrice: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    discountPer: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    netPrice: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    sortDesc: DataTypes.TEXT,
    desc: DataTypes.TEXT
  }, {});

  product.associate = function (models) {
    // associations can be defined here
    models.product.belongsTo(models.SubCategory, {
      foreignKey: 'subCategoryId'
    });
    models.product.hasMany(models.productphoto, {
      foreignKey: 'productId'
    });
    models.product.belongsTo(models.SubChildCategory, {
      foreignKey: 'childCategoryId'
    });
    models.product.hasMany(models.vendor_product, {
      foreignKey: 'productId'
    });
  };

  return product;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwicHJvZHVjdCIsImRlZmluZSIsImNhdGVnb3J5SWQiLCJJTlRFR0VSIiwic3ViQ2F0ZWdvcnlJZCIsImNoaWxkQ2F0ZWdvcnlJZCIsIm5hbWUiLCJTVFJJTkciLCJzbHVnIiwiYnJhbmQiLCJ1bml0U2l6ZSIsInN0YXR1cyIsImJ1eWVyUHJpY2UiLCJwcmljZSIsInF0eSIsImRpc2NvdW50UGVyIiwiZGlzY291bnQiLCJ0b3RhbCIsIm5ldFByaWNlIiwicGhvdG8iLCJzb3J0RGVzYyIsIlRFWFQiLCJkZXNjIiwiYXNzb2NpYXRlIiwibW9kZWxzIiwiYmVsb25nc1RvIiwiU3ViQ2F0ZWdvcnkiLCJmb3JlaWduS2V5IiwiaGFzTWFueSIsInByb2R1Y3RwaG90byIsIlN1YkNoaWxkQ2F0ZWdvcnkiLCJ2ZW5kb3JfcHJvZHVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFDQyxTQUFELEVBQVlDLFNBQVosRUFBMEI7QUFDekMsTUFBTUMsT0FBTyxHQUFHRixTQUFTLENBQUNHLE1BQVYsQ0FBaUIsU0FBakIsRUFBNEI7QUFDMUNDLElBQUFBLFVBQVUsRUFBRUgsU0FBUyxDQUFDSSxPQURvQjtBQUUxQ0MsSUFBQUEsYUFBYSxFQUFFTCxTQUFTLENBQUNJLE9BRmlCO0FBRzFDRSxJQUFBQSxlQUFlLEVBQUVOLFNBQVMsQ0FBQ0ksT0FIZTtBQUkxQ0csSUFBQUEsSUFBSSxFQUFFUCxTQUFTLENBQUNRLE1BSjBCO0FBSzFDQyxJQUFBQSxJQUFJLEVBQUVULFNBQVMsQ0FBQ1EsTUFMMEI7QUFNMUNFLElBQUFBLEtBQUssRUFBRVYsU0FBUyxDQUFDUSxNQU55QjtBQU8xQ0csSUFBQUEsUUFBUSxFQUFFWCxTQUFTLENBQUNRLE1BUHNCO0FBUTFDSSxJQUFBQSxNQUFNLEVBQUVaLFNBQVMsQ0FBQ1EsTUFSd0I7QUFTMUNLLElBQUFBLFVBQVUsRUFBRWIsU0FBUyxDQUFDSSxPQVRvQjtBQVUxQ1UsSUFBQUEsS0FBSyxFQUFFZCxTQUFTLENBQUNJLE9BVnlCO0FBVzFDVyxJQUFBQSxHQUFHLEVBQUVmLFNBQVMsQ0FBQ0ksT0FYMkI7QUFZMUNZLElBQUFBLFdBQVcsRUFBRWhCLFNBQVMsQ0FBQ0ksT0FabUI7QUFhMUNhLElBQUFBLFFBQVEsRUFBRWpCLFNBQVMsQ0FBQ0ksT0Fic0I7QUFjMUNjLElBQUFBLEtBQUssRUFBRWxCLFNBQVMsQ0FBQ0ksT0FkeUI7QUFlMUNlLElBQUFBLFFBQVEsRUFBRW5CLFNBQVMsQ0FBQ0ksT0Fmc0I7QUFnQjFDZ0IsSUFBQUEsS0FBSyxFQUFFcEIsU0FBUyxDQUFDUSxNQWhCeUI7QUFpQjFDYSxJQUFBQSxRQUFRLEVBQUVyQixTQUFTLENBQUNzQixJQWpCc0I7QUFrQjFDQyxJQUFBQSxJQUFJLEVBQUV2QixTQUFTLENBQUNzQjtBQWxCMEIsR0FBNUIsRUFvQmIsRUFwQmEsQ0FBaEI7O0FBcUJBckIsRUFBQUEsT0FBTyxDQUFDdUIsU0FBUixHQUFvQixVQUFTQyxNQUFULEVBQWlCO0FBQ25DO0FBQ0FBLElBQUFBLE1BQU0sQ0FBQ3hCLE9BQVAsQ0FBZXlCLFNBQWYsQ0FBeUJELE1BQU0sQ0FBQ0UsV0FBaEMsRUFBNkM7QUFBRUMsTUFBQUEsVUFBVSxFQUFFO0FBQWQsS0FBN0M7QUFDQUgsSUFBQUEsTUFBTSxDQUFDeEIsT0FBUCxDQUFlNEIsT0FBZixDQUF1QkosTUFBTSxDQUFDSyxZQUE5QixFQUE0QztBQUFFRixNQUFBQSxVQUFVLEVBQUU7QUFBZCxLQUE1QztBQUNBSCxJQUFBQSxNQUFNLENBQUN4QixPQUFQLENBQWV5QixTQUFmLENBQXlCRCxNQUFNLENBQUNNLGdCQUFoQyxFQUFrRDtBQUFFSCxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLQUFsRDtBQUNBSCxJQUFBQSxNQUFNLENBQUN4QixPQUFQLENBQWU0QixPQUFmLENBQXVCSixNQUFNLENBQUNPLGNBQTlCLEVBQThDO0FBQUVKLE1BQUFBLFVBQVUsRUFBRTtBQUFkLEtBQTlDO0FBQ0QsR0FORDs7QUFPQSxTQUFPM0IsT0FBUDtBQUNELENBOUJEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBEYXRhVHlwZXMpID0+IHtcbiAgY29uc3QgcHJvZHVjdCA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3Byb2R1Y3QnLCB7XG4gICAgY2F0ZWdvcnlJZDogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgc3ViQ2F0ZWdvcnlJZDogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgY2hpbGRDYXRlZ29yeUlkOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBuYW1lOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHNsdWc6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgYnJhbmQ6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgdW5pdFNpemU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgc3RhdHVzOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGJ1eWVyUHJpY2U6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIHByaWNlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBxdHk6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIGRpc2NvdW50UGVyOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBkaXNjb3VudDogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgdG90YWw6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIG5ldFByaWNlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBwaG90bzogRGF0YVR5cGVzLlNUUklORyxcbiAgICBzb3J0RGVzYzogRGF0YVR5cGVzLlRFWFQsXG4gICAgZGVzYzogRGF0YVR5cGVzLlRFWFQsXG5cbiAgfSwge30pO1xuICBwcm9kdWN0LmFzc29jaWF0ZSA9IGZ1bmN0aW9uKG1vZGVscykge1xuICAgIC8vIGFzc29jaWF0aW9ucyBjYW4gYmUgZGVmaW5lZCBoZXJlXG4gICAgbW9kZWxzLnByb2R1Y3QuYmVsb25nc1RvKG1vZGVscy5TdWJDYXRlZ29yeSwgeyBmb3JlaWduS2V5OiAnc3ViQ2F0ZWdvcnlJZCcgfSk7XG4gICAgbW9kZWxzLnByb2R1Y3QuaGFzTWFueShtb2RlbHMucHJvZHVjdHBob3RvLCB7IGZvcmVpZ25LZXk6ICdwcm9kdWN0SWQnIH0pO1xuICAgIG1vZGVscy5wcm9kdWN0LmJlbG9uZ3NUbyhtb2RlbHMuU3ViQ2hpbGRDYXRlZ29yeSwgeyBmb3JlaWduS2V5OiAnY2hpbGRDYXRlZ29yeUlkJyB9KTtcbiAgICBtb2RlbHMucHJvZHVjdC5oYXNNYW55KG1vZGVscy52ZW5kb3JfcHJvZHVjdCwgeyBmb3JlaWduS2V5OiAncHJvZHVjdElkJyB9KTsgIFxuICB9O1xuICByZXR1cm4gcHJvZHVjdDtcbn07Il19