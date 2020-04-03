import cucumber.api.java8.En;

public class CatsGlue implements En {
    public CatsGlue() {
        Given("^У меня есть кот$", () -> {
            System.out.println("У меня есть кот");
        });
        When("^У кота нет имени$", () -> {
            System.out.println("Кот без имени");
        });
        Then("^Дать имя коту$", () -> {
            System.out.println("Дать имя коту");
        });
        And("^йцукег$", () -> {
            System.out.println("========================================");
        });
    }
}