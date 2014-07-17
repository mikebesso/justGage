if (window.Shiny == undefined){
  var g = new JustGage(payload)
} else {
  var justgageOutputBinding = new Shiny.OutputBinding();
  $.extend(justgageOutputBinding, {
    find: function(scope) {
      return scope.find('.justGage_output');
    },
    renderValue: function(el, data) {
      if (!$(el).data('gauge')) {
        // If we haven't initialized this gauge yet, do it
        data.id = this.getId(el)
        $(el).data('gauge', new JustGage(data));
      }
      $(el).data('gauge').refresh(data.value);
    }
  });
  Shiny.outputBindings.register(justgageOutputBinding, 
    'dashboard.justgageOutputBinding');
}