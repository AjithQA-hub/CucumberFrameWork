package org.StepDefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", 
glue="org.StepDefinition",
dryRun=false, 
monochrome = true,
strict=true,
snippets = SnippetType.CAMELCASE,
plugin={"html:Report",
		"junit:Report\\JunitReport.xml",
		 "json:Report\\JsonReport.json"})
public class TestRunner1 {

}
