var appLocale = {lc:{"ar":function(n){
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
v:function(d,k){appLocale.c(d,k);return d[k]},
p:function(d,k,o,l,p){appLocale.c(d,k);return d[k] in p?p[d[k]]:(k=appLocale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){appLocale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).appLocale = {
"a_and_b":function(d){return "A / B"},
"addPacket":function(d){return "Добавить пакет"},
"addRouter":function(d){return "Add Router"},
"appendCountToTitle":function(d){return appLocale.v(d,"title")+" ("+appLocale.v(d,"count")+")"},
"ascii":function(d){return "ASCII"},
"autoDnsUsageMessage":function(d){return "Автоматический DNS узел\nИспользование: GET hostname [hostname [hostname ...]]"},
"binary":function(d){return "Двоичный"},
"bitCounter":function(d){return appLocale.v(d,"x")+"/"+appLocale.v(d,"y")+" бит"},
"bits":function(d){return "Биты"},
"cancel":function(d){return "Отмена"},
"clear":function(d){return "Очистить"},
"collapse":function(d){return "Collapse"},
"connect":function(d){return "Подключиться"},
"connected":function(d){return "Соединен"},
"connectToANode":function(d){return "Connect to a Node"},
"decimal":function(d){return "Десятичное"},
"disconnected":function(d){return "Разъединен"},
"dns":function(d){return "DNS"},
"dnsMode":function(d){return "Режим DNS"},
"dnsMode_AUTOMATIC":function(d){return "Автоматический"},
"dnsMode_MANUAL":function(d){return "Ручной"},
"dnsMode_NONE":function(d){return "Отсутствует"},
"dropdownPickOne":function(d){return "-- PICK ONE --"},
"encoding":function(d){return "Кодирование"},
"expand":function(d){return "Expand"},
"from":function(d){return "Форма"},
"hex":function(d){return "Hex"},
"hexadecimal":function(d){return "Шестнадцатеричный"},
"incomingConnectionRequests":function(d){return "Входящиe запросы на подключение"},
"infinity":function(d){return "Бесконечность"},
"instructions":function(d){return "Инструкции"},
"joinSection":function(d){return "Join Section"},
"lobby":function(d){return "Lobby"},
"lobbyIsEmpty":function(d){return "Nobody's here yet."},
"logStatus_dropped":function(d){return "Отключён"},
"logStatus_success":function(d){return "Успех"},
"markAsRead":function(d){return "Отметить как прочитанное"},
"message":function(d){return "Сообщение"},
"myDevice":function(d){return "Мое устройство"},
"myName":function(d){return "Мое имя"},
"myPrivateNetwork":function(d){return "My Private Network"},
"mySection":function(d){return "My Section"},
"number":function(d){return "Number"},
"numBitsPerPacket":function(d){return appLocale.v(d,"x")+" бит на пакет"},
"numBitsPerChunk":function(d){return appLocale.v(d,"numBits")+" бит на фрагмент"},
"outgoingConnectionRequests":function(d){return "Исходящие запросы на подключение"},
"_of_":function(d){return " от "},
"packet":function(d){return "Пакет"},
"packetInfo":function(d){return "Информация о пакете"},
"pickASection":function(d){return "Pick a Section"},
"readWire":function(d){return "Read Wire"},
"receiveBits":function(d){return "Receive Bits"},
"receivedMessageLog":function(d){return "Полученное сообщение журнала"},
"removePacket":function(d){return "Удалить пакет"},
"router":function(d){return "Маршрутизатор"},
"routerTab_bandwidth":function(d){return "Пропускная способность"},
"routerTab_memory":function(d){return "Память"},
"routerTab_stats":function(d){return "Статистика"},
"routerX":function(d){return "Маршрутизатор "+appLocale.v(d,"x")},
"send":function(d){return "Отправить"},
"sendAMessage":function(d){return "Отправить сообщение"},
"sendBits":function(d){return "Send Bits"},
"sentBitsLog":function(d){return "Sent Bits Log"},
"sentMessageLog":function(d){return "Отправить несколько сообщений"},
"setName":function(d){return "Set Name"},
"setWire":function(d){return "Set Wire"},
"setWireToValue":function(d){return "Set Wire to "+appLocale.v(d,"value")},
"shareThisNetwork":function(d){return "Share this network"},
"size":function(d){return "Размер"},
"status":function(d){return "Статус"},
"to":function(d){return "Кому"},
"unlimited":function(d){return "Неограниченно"},
"waitingForNodeToConnect":function(d){return "Waiting for "+appLocale.v(d,"node")+" to connect..."},
"workspaceHeader":function(d){return "Интернет симулятор"},
"xOfYPackets":function(d){return appLocale.v(d,"x")+" от "+appLocale.v(d,"y")},
"xSecondPerPulse":function(d){return appLocale.v(d,"x")+" second per pulse"},
"xSecondsPerPulse":function(d){return appLocale.v(d,"x")+" seconds per pulse"},
"x_Gbps":function(d){return appLocale.v(d,"x")+"Gbps"},
"x_Mbps":function(d){return appLocale.v(d,"x")+"Mbps"},
"x_Kbps":function(d){return appLocale.v(d,"x")+"Kbps"},
"x_bps":function(d){return appLocale.v(d,"x")+"bps"},
"x_GBytes":function(d){return appLocale.v(d,"x")+"GB"},
"x_MBytes":function(d){return appLocale.v(d,"x")+"MB"},
"x_KBytes":function(d){return appLocale.v(d,"x")+"KB"},
"x_Bytes":function(d){return appLocale.v(d,"x")+"B"},
"x_bits":function(d){return appLocale.v(d,"x")+"b"}};