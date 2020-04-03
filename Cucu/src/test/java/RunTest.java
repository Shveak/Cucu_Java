import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(glue = {"Glue"}, plugin = {"pretty", "html:target/cucumber"})
public class RunTest {
}
