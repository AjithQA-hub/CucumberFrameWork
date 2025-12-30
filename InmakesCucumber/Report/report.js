$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Ajith.feature");
formatter.feature({
  "name": "To add the product to cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the product add to cart with size",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "LimeRoad.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 114\nCurrent browser version is 143.0.7499.170 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027AJITH\u0027, ip: \u002710.251.1.211\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0067A813+48355]\n\t(No symbol) [0x0060C4B1]\n\t(No symbol) [0x00515358]\n\t(No symbol) [0x005361AC]\n\t(No symbol) [0x00531EF3]\n\t(No symbol) [0x00530579]\n\t(No symbol) [0x00560C55]\n\t(No symbol) [0x0056093C]\n\t(No symbol) [0x0055A536]\n\t(No symbol) [0x005382DC]\n\t(No symbol) [0x005393DD]\n\tGetHandleVerifier [0x008DAABD+2539405]\n\tGetHandleVerifier [0x0091A78F+2800735]\n\tGetHandleVerifier [0x0091456C+2775612]\n\tGetHandleVerifier [0x007051E0+616112]\n\t(No symbol) [0x00615F8C]\n\t(No symbol) [0x00612328]\n\t(No symbol) [0x0061240B]\n\t(No symbol) [0x00604FF7]\n\tBaseThreadInitThunk [0x75FB5D49+25]\n\tRtlInitializeExceptionChain [0x77C6D6DB+107]\n\tRtlGetAppContainerNamedObjectPath [0x77C6D661+561]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:1002)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:527)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:513)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.base.BaseClass.launchBrowser(BaseClass.java:35)\r\n\tat org.StepDefinition.LimeRoad.to_launch_the_chrome_browser_and_maximize_window(LimeRoad.java:13)\r\n\tat ✽.To launch the chrome browser and maximize window(src/test/resources/Ajith.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To launch the url of limeroad application",
  "keyword": "When "
});
formatter.match({
  "location": "LimeRoad.to_launch_the_url_of_limeroad_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click the shop men",
  "keyword": "And "
});
formatter.match({
  "location": "LimeRoad.to_click_the_shop_men()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To mouseover the women",
  "keyword": "And "
});
formatter.match({
  "location": "LimeRoad.to_mouseover_the_women()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click the Dresses",
  "keyword": "And "
});
formatter.match({
  "location": "LimeRoad.to_click_the_Dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click the first product",
  "keyword": "And "
});
formatter.match({
  "location": "LimeRoad.to_click_the_first_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click the size S",
  "keyword": "And "
});
formatter.match({
  "location": "LimeRoad.to_click_the_size_S()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "LimeRoad.to_click_add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
});