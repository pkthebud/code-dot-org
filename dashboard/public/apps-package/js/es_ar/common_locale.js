var locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){locale.c(d,k);return d[k] in p?p[d[k]]:(k=locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).locale = {
"and":function(d){return "y"},
"booleanTrue":function(d){return "verdadero"},
"booleanFalse":function(d){return "falso"},
"blocks":function(d){return "bloques"},
"blocklyMessage":function(d){return "Blockly"},
"catActions":function(d){return "Acciones"},
"catColour":function(d){return "Color"},
"catLogic":function(d){return "Lógica"},
"catLists":function(d){return "Listas"},
"catLoops":function(d){return "Iteraciones"},
"catMath":function(d){return "Matemáticas"},
"catProcedures":function(d){return "Funciones"},
"catText":function(d){return "texto"},
"catVariables":function(d){return "Variables"},
"clearPuzzle":function(d){return "Volver a empezar"},
"clearPuzzleConfirm":function(d){return "Esto reiniciará el puzzle a su estado inicial y borrará todos los bloques que hayas agregado o cambiado."},
"clearPuzzleConfirmHeader":function(d){return "¿Seguro que quieres empezar de nuevo?"},
"codeMode":function(d){return "Código"},
"codeTooltip":function(d){return "Ver el código JavaScript generado."},
"continue":function(d){return "Continuar"},
"designMode":function(d){return "Diseño"},
"designModeHeader":function(d){return "Modo de diseño"},
"dialogCancel":function(d){return "Cancelar"},
"dialogOK":function(d){return "OK"},
"directionNorthLetter":function(d){return "N"},
"directionSouthLetter":function(d){return "S"},
"directionEastLetter":function(d){return "E"},
"directionWestLetter":function(d){return "O"},
"dropletBlock_addOperator_description":function(d){return "Suma dos números"},
"dropletBlock_addOperator_signatureOverride":function(d){return "Add operator"},
"dropletBlock_andOperator_description":function(d){return "Es verdadero solo si las dos expresiones son verdaderas de otra manera es falso"},
"dropletBlock_andOperator_signatureOverride":function(d){return "Operador boleano \"AND\""},
"dropletBlock_arcLeft_description":function(d){return "Mueve la tortuga en sentido contrario a las manecillas del reloj utilizando el número especificado de grados y radio"},
"dropletBlock_arcLeft_param0":function(d){return "angle"},
"dropletBlock_arcLeft_param1":function(d){return "radio"},
"dropletBlock_arcRight_description":function(d){return "Mueve la tortuga en sentido de las manecillas del reloj utilizando el número especificado de grados y radio"},
"dropletBlock_arcRight_param0":function(d){return "angle"},
"dropletBlock_arcRight_param1":function(d){return "radio"},
"dropletBlock_assign_x_description":function(d){return "Reasigna una variable"},
"dropletBlock_assign_x_signatureOverride":function(d){return "Assign a variable"},
"dropletBlock_button_description":function(d){return "CREA UN BOTON Y ASIGNALE UN IDENTIFICADOR"},
"dropletBlock_button_param0":function(d){return "buttonId"},
"dropletBlock_button_param1":function(d){return "texto"},
"dropletBlock_callMyFunction_description":function(d){return "Llama a una función nombrada que no tiene parámetros"},
"dropletBlock_callMyFunction_signatureOverride":function(d){return "Llamar una función"},
"dropletBlock_callMyFunction_n_description":function(d){return "Llama a una función nombrada que tiene uno o más parámetros"},
"dropletBlock_callMyFunction_n_signatureOverride":function(d){return "Llamar a una función con parámetros"},
"dropletBlock_changeScore_description":function(d){return "Agregar o quitar un punto a la puntuación."},
"dropletBlock_checkbox_description":function(d){return "CREA UNA UNA CASILLA DE IDENTIFICACION Y ASIGNALE UN IDENTIFICADOR"},
"dropletBlock_checkbox_param0":function(d){return "checkboxId"},
"dropletBlock_checkbox_param1":function(d){return "checked"},
"dropletBlock_circle_description":function(d){return "Dibuja un circulo sobre el lienzo activo con el radio y las coordenadas especificadas para el centro (x, y)"},
"dropletBlock_circle_param0":function(d){return "centroX"},
"dropletBlock_circle_param1":function(d){return "centroY"},
"dropletBlock_circle_param2":function(d){return "radio"},
"dropletBlock_clearCanvas_description":function(d){return "Borra todos los datos del canvas activo"},
"dropletBlock_clearInterval_description":function(d){return "Borrar un temporizador de intervalos existente pasando el valor devuelto por setInterval()"},
"dropletBlock_clearInterval_param0":function(d){return "interval"},
"dropletBlock_clearTimeout_description":function(d){return "Borrar un temporizador existente pasando el valor devuelto por setTimeout()"},
"dropletBlock_clearTimeout_param0":function(d){return "timeout"},
"dropletBlock_console.log_description":function(d){return "Muestra la cadena o variable en la pantalla de la consola"},
"dropletBlock_console.log_param0":function(d){return "mensaje"},
"dropletBlock_container_description":function(d){return "Crear un contenedor de división con el id especificado y opcionalmente establecer su HTML interior"},
"dropletBlock_createCanvas_description":function(d){return "Crear un lienzo con el id especificado y opcionalmente establecer dimensiones de ancho  y alto"},
"dropletBlock_createCanvas_param0":function(d){return "canvasId"},
"dropletBlock_createCanvas_param1":function(d){return "anchura"},
"dropletBlock_createCanvas_param2":function(d){return "altura"},
"dropletBlock_createRecord_description":function(d){return "Usando almacenamiento de datos de tabla del laboratorio de la aplicación, crea un registro con un único id en nombre de la tabla proporcionada y llama a la callbackFunction cuando termine la acción."},
"dropletBlock_createRecord_param0":function(d){return "nombreTabla"},
"dropletBlock_createRecord_param1":function(d){return "registro"},
"dropletBlock_createRecord_param2":function(d){return "funcionDeRetorno"},
"dropletBlock_declareAssign_x_array_1_4_description":function(d){return "Crea una variable y la inicializa como un arreglo"},
"dropletBlock_declareAssign_x_array_1_4_signatureOverride":function(d){return "Declare a variable assigned to an array"},
"dropletBlock_declareAssign_x_description":function(d){return "Declara una variable con el nombre dado después de 'var', y le asigna el valor en el lado derecho de la expresión"},
"dropletBlock_declareAssign_x_signatureOverride":function(d){return "Declare una variable"},
"dropletBlock_declareAssign_x_prompt_description":function(d){return "Crea una variable y le asigna su valor al mostrar un indicador o ventana"},
"dropletBlock_declareAssign_x_prompt_signatureOverride":function(d){return "Prompt the user for a value and store it"},
"dropletBlock_deleteElement_description":function(d){return "Elimina el elemento con el identificador especificado"},
"dropletBlock_deleteElement_param0":function(d){return "id"},
"dropletBlock_deleteRecord_description":function(d){return "Al usar la tabla de almacenamiento de datos App Lab, se borra el registro proporcionado en tableName. record es un objeto que debe identificarse solamente con su campo id. Cuando la llamada se ha completado, se llama el callbackFunction."},
"dropletBlock_deleteRecord_param0":function(d){return "nombreTabla"},
"dropletBlock_deleteRecord_param1":function(d){return "registro"},
"dropletBlock_deleteRecord_param2":function(d){return "funcionDeRetorno"},
"dropletBlock_divideOperator_description":function(d){return "Dividir dos números"},
"dropletBlock_divideOperator_signatureOverride":function(d){return "Divide operator"},
"dropletBlock_dot_description":function(d){return "Dibuja un punto con el radio especificado en la ubicación de la tortuga"},
"dropletBlock_dot_param0":function(d){return "radio"},
"dropletBlock_drawImage_description":function(d){return "Dibuja una imagen en el lienzo activo con la imagen especificada, y los valores \"x\" y \"y\" como la coordenada superior izquierda"},
"dropletBlock_drawImage_param0":function(d){return "id"},
"dropletBlock_drawImage_param1":function(d){return "x"},
"dropletBlock_drawImage_param2":function(d){return "y"},
"dropletBlock_drawImage_param3":function(d){return "anchura"},
"dropletBlock_drawImage_param4":function(d){return "altura"},
"dropletBlock_dropdown_description":function(d){return "Crea una lista desplegable, le asigna un identificador y la llena con una lista de elementos"},
"dropletBlock_dropdown_signatureOverride":function(d){return "dropdown(dropdownID, option1, option2, ..., optionX)"},
"dropletBlock_equalityOperator_description":function(d){return "Prueba Igualdad"},
"dropletBlock_equalityOperator_signatureOverride":function(d){return "Equality operator"},
"dropletBlock_forLoop_i_0_4_description":function(d){return "Crea un bucle que consiste en una expresión de inicialización, una expresión condicional, una expresión incremental y un bloque de instrucciones los cuales se ejecutan con cada iteración del bucle"},
"dropletBlock_forLoop_i_0_4_signatureOverride":function(d){return "bucle \"for\""},
"dropletBlock_functionParams_n_description":function(d){return "Un conjunto de instrucciones que toma uno o mas parámetros y realiza una tarea o calcula un valor, cuando se manda llamar la función"},
"dropletBlock_functionParams_n_signatureOverride":function(d){return "Define una función con parametros"},
"dropletBlock_functionParams_none_description":function(d){return "Un conjunto de instrucciones que realiza una tarea o calcula un valor, cuando se manda llamar la función"},
"dropletBlock_functionParams_none_signatureOverride":function(d){return "Define una función"},
"dropletBlock_getAlpha_description":function(d){return "Obtiene el valor alfa"},
"dropletBlock_getAlpha_param0":function(d){return "datosImagen"},
"dropletBlock_getAlpha_param1":function(d){return "x"},
"dropletBlock_getAlpha_param2":function(d){return "y"},
"dropletBlock_getAttribute_description":function(d){return "Obtiene el atributo dado"},
"dropletBlock_getBlue_description":function(d){return "Gets the given blue value"},
"dropletBlock_getBlue_param0":function(d){return "datosImagen"},
"dropletBlock_getBlue_param1":function(d){return "x"},
"dropletBlock_getBlue_param2":function(d){return "y"},
"dropletBlock_getChecked_description":function(d){return "Obtener el estado de un botón de caja o radio"},
"dropletBlock_getChecked_param0":function(d){return "id"},
"dropletBlock_getDirection_description":function(d){return "Get the turtle's direction (0 degrees is pointing up)"},
"dropletBlock_getGreen_description":function(d){return "Gets the given green value"},
"dropletBlock_getGreen_param0":function(d){return "datosImagen"},
"dropletBlock_getGreen_param1":function(d){return "x"},
"dropletBlock_getGreen_param2":function(d){return "y"},
"dropletBlock_getImageData_description":function(d){return "Get the ImageData for a rectangle (x, y, width, height) within the active  canvas"},
"dropletBlock_getImageData_param0":function(d){return "startX"},
"dropletBlock_getImageData_param1":function(d){return "startY"},
"dropletBlock_getImageData_param2":function(d){return "endX"},
"dropletBlock_getImageData_param3":function(d){return "endY"},
"dropletBlock_getImageURL_description":function(d){return "Get the URL associated with an image or image upload button"},
"dropletBlock_getImageURL_param0":function(d){return "imageID"},
"dropletBlock_getKeyValue_description":function(d){return "Reads the value associated with the key from the remote data store."},
"dropletBlock_getKeyValue_param0":function(d){return "clave"},
"dropletBlock_getKeyValue_param1":function(d){return "funcionDeRetorno"},
"dropletBlock_getRed_description":function(d){return "Gets the given red value"},
"dropletBlock_getRed_param0":function(d){return "datosImagen"},
"dropletBlock_getRed_param1":function(d){return "x"},
"dropletBlock_getRed_param2":function(d){return "y"},
"dropletBlock_getText_description":function(d){return "Obtener el texto del elemento especificado"},
"dropletBlock_getText_param0":function(d){return "id"},
"dropletBlock_getTime_description":function(d){return "Obtener la hora actual en milisegundos"},
"dropletBlock_getUserId_description":function(d){return "Obtiene un identificador único para el usuario actual de esta aplicación"},
"dropletBlock_getX_description":function(d){return "Obtiene la actual coordenada x en píxeles de la tortuga"},
"dropletBlock_getXPosition_description":function(d){return "Obtiene la posición del elemento x"},
"dropletBlock_getXPosition_param0":function(d){return "id"},
"dropletBlock_getY_description":function(d){return "Obtiene la coordenada actual en píxeles de la tortuga"},
"dropletBlock_getYPosition_description":function(d){return "Obtiene la posición del elemento y"},
"dropletBlock_getYPosition_param0":function(d){return "id"},
"dropletBlock_greaterThanOperator_description":function(d){return "Compara 2 números"},
"dropletBlock_greaterThanOperator_signatureOverride":function(d){return "Greater than operator"},
"dropletBlock_hide_description":function(d){return "Oculta la tortuga para que no se muestra en la pantalla"},
"dropletBlock_hideElement_description":function(d){return "Hide the element with the specified id"},
"dropletBlock_hideElement_param0":function(d){return "id"},
"dropletBlock_ifBlock_description":function(d){return "Se ejecuta un bloque de sentencias si la condición especificada es verdadera"},
"dropletBlock_ifBlock_signatureOverride":function(d){return "instrucción \"if\""},
"dropletBlock_ifElseBlock_description":function(d){return "Se ejecuta un bloque de sentencias si la condición especificada es verdadera; de lo contrario, se ejecutan el bloque de sentencias en la cláusula else"},
"dropletBlock_ifElseBlock_signatureOverride":function(d){return "Instruccion \"if/else\""},
"dropletBlock_image_description":function(d){return "Create an image and assign it an element id"},
"dropletBlock_image_param0":function(d){return "id"},
"dropletBlock_image_param1":function(d){return "url"},
"dropletBlock_imageUploadButton_description":function(d){return "Crear un botón de subir imagen y asignar un identificador de elemento"},
"dropletBlock_inequalityOperator_description":function(d){return "Prueba no igualdad"},
"dropletBlock_inequalityOperator_signatureOverride":function(d){return "Inequality operator"},
"dropletBlock_innerHTML_description":function(d){return "Establece el código HTML interno para el elemento con el id especificado"},
"dropletBlock_lessThanOperator_description":function(d){return "Compara 2 números"},
"dropletBlock_lessThanOperator_signatureOverride":function(d){return "Less than operator"},
"dropletBlock_line_description":function(d){return "Dibuja una línea sobre el lienzo activo de x1, y1, x2, y2."},
"dropletBlock_line_param0":function(d){return "x1"},
"dropletBlock_line_param1":function(d){return "y1"},
"dropletBlock_line_param2":function(d){return "x2"},
"dropletBlock_line_param3":function(d){return "y2"},
"dropletBlock_mathAbs_description":function(d){return "Devuelve el valor absoluto de x"},
"dropletBlock_mathAbs_signatureOverride":function(d){return "Math.abs(x)"},
"dropletBlock_mathMax_description":function(d){return "Devuelve el valor mínimo entre uno o mas valores n1, n2, ..., nX"},
"dropletBlock_mathMax_signatureOverride":function(d){return "Math.max(n1, n2, ..., nX)"},
"dropletBlock_mathMin_description":function(d){return "Devuelve el valor mínimo entre uno o mas valores n1, n2, ..., nX"},
"dropletBlock_mathMin_signatureOverride":function(d){return "Math.min(n1, n2, ..., nX)"},
"dropletBlock_mathRound_description":function(d){return "Redondea hacia el entero mas cercano"},
"dropletBlock_mathRound_signatureOverride":function(d){return "Math.round(x)"},
"dropletBlock_move_description":function(d){return "Mueve la tortuga de su ubicación actual. Agrega \"x\" a la posición \"x\" de la tortuga y \"y\" a la posición \"y\" de la tortuga"},
"dropletBlock_move_param0":function(d){return "x"},
"dropletBlock_move_param1":function(d){return "y"},
"dropletBlock_moveBackward_description":function(d){return "Mueve la tortuga atrás un determinado número de píxeles en su dirección actual"},
"dropletBlock_moveBackward_param0":function(d){return "pixeles"},
"dropletBlock_moveForward_description":function(d){return "Mueve la tortuga adelante un determinado número de píxeles en su dirección actual"},
"dropletBlock_moveForward_param0":function(d){return "pixeles"},
"dropletBlock_moveTo_description":function(d){return "Mueve la tortuga a una específica coordenada x, y en la pantalla"},
"dropletBlock_moveTo_param0":function(d){return "x"},
"dropletBlock_moveTo_param1":function(d){return "y"},
"dropletBlock_multiplyOperator_description":function(d){return "Multiplicar dos números"},
"dropletBlock_multiplyOperator_signatureOverride":function(d){return "Multiply operator"},
"dropletBlock_notOperator_description":function(d){return "Devuelve false si la expresión se puede convertir a verdadero; de lo contrario, devuelve verdadero"},
"dropletBlock_notOperator_signatureOverride":function(d){return "Operador boleano \"AND\""},
"dropletBlock_onEvent_description":function(d){return "Ejecuta el código en respuesta al evento especificado."},
"dropletBlock_onEvent_param0":function(d){return "id"},
"dropletBlock_onEvent_param1":function(d){return "evento"},
"dropletBlock_onEvent_param2":function(d){return "function"},
"dropletBlock_orOperator_description":function(d){return "Devuelve verdadero cuando cualquier expresión es verdadero y falso si no"},
"dropletBlock_orOperator_signatureOverride":function(d){return "Operador boleano \"OR\""},
"dropletBlock_penColor_description":function(d){return "Establece el color de la línea dibujada detrás de la tortuga a que se mueva"},
"dropletBlock_penColor_param0":function(d){return "color"},
"dropletBlock_penColour_description":function(d){return "Establece el color de la línea dibujada detrás de la tortuga a que se mueva"},
"dropletBlock_penColour_param0":function(d){return "color"},
"dropletBlock_penDown_description":function(d){return "Causa una línea para dibujar detrás de la tortuga a que se mueva"},
"dropletBlock_penUp_description":function(d){return "Detiene la tortuga de trazar una línea detrás de ella mientras se mueve"},
"dropletBlock_penWidth_description":function(d){return "Set the turtle to the specified pen width"},
"dropletBlock_penWidth_param0":function(d){return "anchura"},
"dropletBlock_playSound_description":function(d){return "Reproducir el archivo de sonido MP3, OGG o WAV desde la dirección URL especificada"},
"dropletBlock_playSound_param0":function(d){return "url"},
"dropletBlock_putImageData_description":function(d){return "Set the ImageData for a rectangle within the active  canvas with x, y as the top left coordinates"},
"dropletBlock_putImageData_param0":function(d){return "datosImagen"},
"dropletBlock_putImageData_param1":function(d){return "startX"},
"dropletBlock_putImageData_param2":function(d){return "startY"},
"dropletBlock_radioButton_description":function(d){return "Create a radio button and assign it an element id"},
"dropletBlock_radioButton_param0":function(d){return "id"},
"dropletBlock_radioButton_param1":function(d){return "checked"},
"dropletBlock_radioButton_param2":function(d){return "group"},
"dropletBlock_randomNumber_max_description":function(d){return "Get a random number between 0 and the specified maximum value"},
"dropletBlock_randomNumber_max_signatureOverride":function(d){return "randomNumber(max)"},
"dropletBlock_randomNumber_min_max_description":function(d){return "Get a random number between the specified minimum and maximum values"},
"dropletBlock_randomNumber_min_max_signatureOverride":function(d){return "randomNumber(min, max)"},
"dropletBlock_readRecords_description":function(d){return "Usando la tabla App Lab almacenamiento de datos, Lee los registros de la tableName que coinciden con los searchTerms. Cuando haya finalizado la llamada, el callbackFunction es llamado y es pasado el array de registros."},
"dropletBlock_readRecords_param0":function(d){return "nombreTabla"},
"dropletBlock_readRecords_param1":function(d){return "terminosBusqueda"},
"dropletBlock_readRecords_param2":function(d){return "funcionDeRetorno"},
"dropletBlock_rect_description":function(d){return "Dibuja un rectángulo en el lienzo activo posicionado en la parte superior izquierdaX y superior izquierdaY y el ancho y la altura."},
"dropletBlock_rect_param0":function(d){return "arribaIzqX"},
"dropletBlock_rect_param1":function(d){return "arribaIzqY"},
"dropletBlock_rect_param2":function(d){return "anchura"},
"dropletBlock_rect_param3":function(d){return "altura"},
"dropletBlock_return_description":function(d){return "Regresa un valor de la función"},
"dropletBlock_return_signatureOverride":function(d){return "volver"},
"dropletBlock_setActiveCanvas_description":function(d){return "Set the canvas id for subsequent canvas commands (only needed when there are multiple canvas elements)"},
"dropletBlock_setActiveCanvas_param0":function(d){return "canvasId"},
"dropletBlock_setAlpha_description":function(d){return "Sets the given value"},
"dropletBlock_setAlpha_param0":function(d){return "datosImagen"},
"dropletBlock_setAlpha_param1":function(d){return "x"},
"dropletBlock_setAlpha_param2":function(d){return "y"},
"dropletBlock_setAlpha_param3":function(d){return "alphaValue"},
"dropletBlock_setAttribute_description":function(d){return "Establece el valor dado"},
"dropletBlock_setBackground_description":function(d){return "Establece la imagen de fondo"},
"dropletBlock_setBlue_description":function(d){return "Establece la cantidad de azul (desde 0 hasta 255) en el color del píxel situado en la dada x y la posición y en los datos de imagen a la cantidad de entrada del valor azul."},
"dropletBlock_setBlue_param0":function(d){return "datosImagen"},
"dropletBlock_setBlue_param1":function(d){return "x"},
"dropletBlock_setBlue_param2":function(d){return "y"},
"dropletBlock_setBlue_param3":function(d){return "valorAzul"},
"dropletBlock_setChecked_description":function(d){return "Establecer el estado de un botón checkbox o radio boton"},
"dropletBlock_setChecked_param0":function(d){return "id"},
"dropletBlock_setChecked_param1":function(d){return "checked"},
"dropletBlock_setFillColor_description":function(d){return "Set the fill color for the active  canvas"},
"dropletBlock_setFillColor_param0":function(d){return "color"},
"dropletBlock_setGreen_description":function(d){return "Establece la cantidad de verde (desde 0 hasta 255) en el color de los píxeles situados en el dado x y la posición y en los datos de imagen a la cantidad de entrada valor verde."},
"dropletBlock_setGreen_param0":function(d){return "datosImagen"},
"dropletBlock_setGreen_param1":function(d){return "x"},
"dropletBlock_setGreen_param2":function(d){return "y"},
"dropletBlock_setGreen_param3":function(d){return "valorVerde"},
"dropletBlock_setImageURL_description":function(d){return "Set the URL for the specified image element id"},
"dropletBlock_setImageURL_param0":function(d){return "id"},
"dropletBlock_setImageURL_param1":function(d){return "url"},
"dropletBlock_setInterval_description":function(d){return "Continue to execute code each time the specified number of milliseconds has elapsed"},
"dropletBlock_setInterval_param0":function(d){return "callbackFunction"},
"dropletBlock_setInterval_param1":function(d){return "milisegundos"},
"dropletBlock_setKeyValue_description":function(d){return "Almacena una clave/valor en almacenamiento de datos de clave/valor de App Lab y llama a la callbackFunction cuando termine la acción."},
"dropletBlock_setKeyValue_param0":function(d){return "clave"},
"dropletBlock_setKeyValue_param1":function(d){return "valor"},
"dropletBlock_setKeyValue_param2":function(d){return "funcionDeRetorno"},
"dropletBlock_setParent_description":function(d){return "Configurar un elemento para convertirse en secundario de un elemento primario"},
"dropletBlock_setPosition_description":function(d){return "Posición de un elemento con x, y, ancho y altura de coordenadas"},
"dropletBlock_setPosition_param0":function(d){return "id"},
"dropletBlock_setPosition_param1":function(d){return "x"},
"dropletBlock_setPosition_param2":function(d){return "y"},
"dropletBlock_setPosition_param3":function(d){return "anchura"},
"dropletBlock_setPosition_param4":function(d){return "altura"},
"dropletBlock_setRed_description":function(d){return "Establece la cantidad de rojo (desde 0 hasta 255) en el color del píxel situado en el dado x y la posición y en los datos de imagen a la cantidad de entrada valor de rojo."},
"dropletBlock_setRed_param0":function(d){return "datosImagen"},
"dropletBlock_setRed_param1":function(d){return "x"},
"dropletBlock_setRed_param2":function(d){return "y"},
"dropletBlock_setRed_param3":function(d){return "valorRojo"},
"dropletBlock_setRGB_description":function(d){return "Sets the RGB color values (ranging from 0 to 255) of the pixel located at the given x and y position in the given image data to the input red, green, blue amounts"},
"dropletBlock_setRGB_param0":function(d){return "datosImagen"},
"dropletBlock_setRGB_param1":function(d){return "x"},
"dropletBlock_setRGB_param2":function(d){return "y"},
"dropletBlock_setRGB_param3":function(d){return "rojo"},
"dropletBlock_setRGB_param4":function(d){return "verde"},
"dropletBlock_setRGB_param5":function(d){return "azul"},
"dropletBlock_setStrokeColor_description":function(d){return "Set the stroke color for the active  canvas"},
"dropletBlock_setStrokeColor_param0":function(d){return "color"},
"dropletBlock_setSprite_description":function(d){return "Establece la imagen del actor"},
"dropletBlock_setSpriteEmotion_description":function(d){return "Define el estado de ánimo del actor"},
"dropletBlock_setSpritePosition_description":function(d){return "Mueve instantáneamente un actor a la posición especificada."},
"dropletBlock_setSpriteSpeed_description":function(d){return "Ajusta la velocidad de un actor"},
"dropletBlock_setStrokeWidth_description":function(d){return "Set the line width for the active  canvas"},
"dropletBlock_setStrokeWidth_param0":function(d){return "anchura"},
"dropletBlock_setStyle_description":function(d){return "Agregar texto de estilo CSS a un elemento"},
"dropletBlock_setText_description":function(d){return "Establecer el texto del elemento especificado"},
"dropletBlock_setText_param0":function(d){return "id"},
"dropletBlock_setText_param1":function(d){return "texto"},
"dropletBlock_setTimeout_description":function(d){return "Establecer un minutero y ejecutar el código cuando haya transcurrido el número de milisegundos"},
"dropletBlock_setTimeout_param0":function(d){return "function"},
"dropletBlock_setTimeout_param1":function(d){return "milisegundos"},
"dropletBlock_show_description":function(d){return "La tortuga se muestra en la pantalla, haciéndola visible en su localización actual"},
"dropletBlock_showElement_description":function(d){return "Show the element with the specified id"},
"dropletBlock_showElement_param0":function(d){return "id"},
"dropletBlock_speed_description":function(d){return "Change the execution speed of the program to the specified percentage value"},
"dropletBlock_speed_param0":function(d){return "valor"},
"dropletBlock_startWebRequest_description":function(d){return "Solicitar datos de internet y ejecutar código cuando la solicitud está completa"},
"dropletBlock_startWebRequest_param0":function(d){return "url"},
"dropletBlock_startWebRequest_param1":function(d){return "function"},
"dropletBlock_subtractOperator_description":function(d){return "Resta dos numeros"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Subtract operator"},
"dropletBlock_textInput_description":function(d){return "Crear una entrada de texto y lo asigna a un identificador de elemento"},
"dropletBlock_textInput_param0":function(d){return "inputId"},
"dropletBlock_textInput_param1":function(d){return "texto"},
"dropletBlock_textLabel_description":function(d){return "Create a text label, assign it an element id, and bind it to an associated element"},
"dropletBlock_textLabel_param0":function(d){return "labelId"},
"dropletBlock_textLabel_param1":function(d){return "texto"},
"dropletBlock_textLabel_param2":function(d){return "forId"},
"dropletBlock_throw_description":function(d){return "Lanza un proyectil desde el actor especificado."},
"dropletBlock_turnLeft_description":function(d){return "Turn the turtle counterclockwise by the specified number of degrees"},
"dropletBlock_turnLeft_param0":function(d){return "angle"},
"dropletBlock_turnRight_description":function(d){return "Turn the turtle clockwise by the specified number of degrees"},
"dropletBlock_turnRight_param0":function(d){return "angle"},
"dropletBlock_turnTo_description":function(d){return "Turn the turtle to the specified direction (0 degrees is pointing up)"},
"dropletBlock_turnTo_param0":function(d){return "angle"},
"dropletBlock_updateRecord_description":function(d){return "Uso de almacenamiento de datos de tabla de App Lab, actualiza el registro proporcionado en tableName. registro debe identificarse unícamente con su campo id. Cuando la llamada se ha completado, el callbackFunction se llama"},
"dropletBlock_updateRecord_param0":function(d){return "nombreTabla"},
"dropletBlock_updateRecord_param1":function(d){return "registro"},
"dropletBlock_updateRecord_param2":function(d){return "funcionDeRetorno"},
"dropletBlock_vanish_description":function(d){return "desaparece el actor."},
"dropletBlock_whileBlock_description":function(d){return "Crea un bucle que consta de una expresión condicional y un bloque de comandos ejecutados en cada iteración del bucle. El bucle continúa ejecutar mientras la condición se evalúa como true"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "bucle \"while\""},
"dropletBlock_write_description":function(d){return "Crea un bloque de texto"},
"dropletBlock_write_param0":function(d){return "texto"},
"end":function(d){return "fin"},
"emptyBlocksErrorMsg":function(d){return "Los bloques \"repetir\" o \"si\" deben tener otros bloques dentro de ellos para funcionar. Asegúrate que el bloque interno quede correctamente dentro del bloque que lo contiene."},
"emptyFunctionalBlock":function(d){return "Tienes un bloque con una entrada vacía."},
"emptyFunctionBlocksErrorMsg":function(d){return "El bloque de función necesita tener otros bloques en su interior para funcionar."},
"errorEmptyFunctionBlockModal":function(d){return "Deben haber bloques dentro de tu definición de función. Haga clic en Editar y arrastre bloques dentro del bloque verde."},
"errorIncompleteBlockInFunction":function(d){return "Haga clic en \"Editar\" para asegurarse de que no tienes ningún bloque desaparecido dentro de su definición de función."},
"errorParamInputUnattached":function(d){return "Recuerda adjuntar un bloque a cada parámetro de entrada en el bloque función en tu espacio de trabajo."},
"errorUnusedParam":function(d){return "Añadiste un bloque parámetro pero no lo usaste en la definición. Asegúrate de que usas tu parámetro haciendo clic en Editar y situando el bloque parámetro dentro del bloque verde."},
"errorRequiredParamsMissing":function(d){return "Crea un parámetro para tu función haciendo clic en Editar y añadiendo los parámetros necesarios. Arrastra los nuevos bloques parámetro a la definición de tu función."},
"errorUnusedFunction":function(d){return "Has creado una función pero nunca la has usado en tu espacio de trabajo. Haz clic en Funciones en la caja de herramientas y asegúrate que la usas en tu programa."},
"errorQuestionMarksInNumberField":function(d){return "Intenta reemplazar \"???\" con un valor."},
"extraTopBlocks":function(d){return "Tienes bloques sin ataduras."},
"extraTopBlocksWhenRun":function(d){return "Tienes bloques sin ataduras. ¿Quisiste decir fijar éstos al bloque \"cuando ejecuta\"?"},
"finalStage":function(d){return "¡Felicidades! Has completado la etapa final."},
"finalStageTrophies":function(d){return "¡Felicidades! Has completado la etapa final y ganaste  "+locale.p(d,"numTrophies",0,"es",{"one":"un trofeo","other":locale.n(d,"numTrophies")+" trofeos"})+"."},
"finish":function(d){return "Terminar"},
"generatedCodeInfo":function(d){return "Incluso las mejores universidades enseñan programación basada en bloques (por ejemplo, "+locale.v(d,"berkeleyLink")+", "+locale.v(d,"harvardLink")+"). Pero, por debajo, los bloques que has programado también se pueden mostrar en JavaScript, el lenguaje de programación más utilizado en el mundo:"},
"hashError":function(d){return "Lo sentimos, '%1' no se corresponde con ningún programa guardado."},
"help":function(d){return "Ayuda"},
"hintTitle":function(d){return "Sugerencia:"},
"jump":function(d){return "salta"},
"keepPlaying":function(d){return "Seguir jugando"},
"levelIncompleteError":function(d){return "Estás utilizando todos los tipos necesarios de bloques pero no de la manera correcta."},
"listVariable":function(d){return "lista"},
"makeYourOwnFlappy":function(d){return "Crea tu propio juego Flappy Bird"},
"missingBlocksErrorMsg":function(d){return "Trata de resolver este puzzle usando uno o más de los bloques de abajo."},
"nextLevel":function(d){return "¡Felicidades! Completaste el Puzzle "+locale.v(d,"puzzleNumber")+"."},
"nextLevelTrophies":function(d){return "¡Felicidades! Completaste el puzzle "+locale.v(d,"puzzleNumber")+" y ganaste "+locale.p(d,"numTrophies",0,"es",{"one":"un trofeo","other":locale.n(d,"numTrophies")+" trofeos"})+"."},
"nextPuzzle":function(d){return "Next Puzzle"},
"nextStage":function(d){return "¡ Felicidades! Completaste "+locale.v(d,"stageName")+"."},
"nextStageTrophies":function(d){return "¡Felicidades! Completaste la etapa "+locale.v(d,"stageName")+" y ganaste "+locale.p(d,"numTrophies",0,"es",{"one":"a trophy","other":locale.n(d,"numTrophies")+" trophies"})+"."},
"numBlocksNeeded":function(d){return "¡Felicidades! Completaste el puzzle "+locale.v(d,"puzzleNumber")+". (Sin embargo, podrías haber usado sólo "+locale.p(d,"numBlocks",0,"es",{"one":"1 bloque","other":locale.n(d,"numBlocks")+" bloques"})+".)"},
"numLinesOfCodeWritten":function(d){return "¡Acabas de escribir "+locale.p(d,"numLines",0,"es",{"one":"una línea","other":locale.n(d,"numLines")+" líneas"})+" de código!"},
"play":function(d){return "jugar"},
"print":function(d){return "Imprimir"},
"puzzleTitle":function(d){return "Puzzle "+locale.v(d,"puzzle_number")+" de "+locale.v(d,"stage_total")},
"repeat":function(d){return "repetir"},
"resetProgram":function(d){return "Reiniciar"},
"runProgram":function(d){return "Ejecutar"},
"runTooltip":function(d){return "Ejecuta el programa definido por los bloques del espacio de trabajo."},
"score":function(d){return "puntuación"},
"showCodeHeader":function(d){return "Mostrar el código"},
"showBlocksHeader":function(d){return "Mostrar bloques"},
"showGeneratedCode":function(d){return "Mostrar el código"},
"stringEquals":function(d){return "cadena =?"},
"subtitle":function(d){return "un entorno de programación visual"},
"textVariable":function(d){return "texto"},
"tooFewBlocksMsg":function(d){return "Estás utilizando todos los tipos necesarios de bloques, pero trata de usar más de estos tipos de bloques para completar este puzzle."},
"tooManyBlocksMsg":function(d){return "Puedes resolver este puzzle con <x id='START_SPAN'/><x id='END_SPAN'/> bloques."},
"tooMuchWork":function(d){return "¡Me has hecho trabajar mucho!  ¿Podrías tratar de repetir menos veces?"},
"toolboxHeader":function(d){return "bloques"},
"toolboxHeaderDroplet":function(d){return "Caja de Herramientas"},
"hideToolbox":function(d){return "(Ocultar)"},
"showToolbox":function(d){return "Mostrar el cuadro de herramientas"},
"openWorkspace":function(d){return "Cómo funciona"},
"totalNumLinesOfCodeWritten":function(d){return "Total: "+locale.p(d,"numLines",0,"es",{"one":"1 línea","other":locale.n(d,"numLines")+" lineas"})+" de código."},
"tryAgain":function(d){return "Vuelve a intentarlo"},
"hintRequest":function(d){return "Ver pista"},
"backToPreviousLevel":function(d){return "Volver al nivel anterior"},
"saveToGallery":function(d){return "Guardar en la Galería"},
"savedToGallery":function(d){return "¡Guardado en la Galería!"},
"shareFailure":function(d){return "Perdón, no podemos compartir este programa."},
"workspaceHeaderShort":function(d){return "Espacio de trabajo: "},
"infinity":function(d){return "Infinito"},
"rotateText":function(d){return "Gira tu dispositivo."},
"orientationLock":function(d){return "Desactiva el bloqueo de orientación en la configuración del dispositivo."},
"wantToLearn":function(d){return "¿Quieres aprender a programar?"},
"watchVideo":function(d){return "Mira el Video"},
"when":function(d){return "cuando"},
"whenRun":function(d){return "cuando se ejecuta"},
"tryHOC":function(d){return "Prueba la Hora del Código"},
"signup":function(d){return "Únete al curso de introducción"},
"hintHeader":function(d){return "Aquí hay un consejo:"},
"genericFeedback":function(d){return "Mira como terminaste, y trata de reparar tu programa."},
"toggleBlocksErrorMsg":function(d){return "Necesitás corregir un error en tu programa antes de que pueda ser mostrado como bloques."},
"defaultTwitterText":function(d){return "Mira lo que hice"}};