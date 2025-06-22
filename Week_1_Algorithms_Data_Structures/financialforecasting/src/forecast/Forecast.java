package forecast;

import java.util.Scanner;

public class Forecast {

    // Recursive method
    public static double forecastRecursive(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue;
        return forecastRecursive(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    // Iterative method
    public static double forecastIterative(double currentValue, double growthRate, int years) {
        for (int i = 0; i < years; i++) {
            currentValue *= (1 + growthRate);
        }
        return currentValue;
    }

    // Optimized method using Mathematical Formula
    public static double forecastOptimized(double currentValue, double growthRate, int years) {
        return currentValue * Math.pow(1 + growthRate, years);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter current value: ");
        double currentValue = sc.nextDouble();

        System.out.print("Enter annual growth rate: ");
        double growthRatePercent = sc.nextDouble();
        double growthRate = growthRatePercent / 100.0;

        System.out.print("Enter number of years");
        int years = sc.nextInt();

        double valRecursive = forecastRecursive(currentValue, growthRate, years);
        double valIterative = forecastIterative(currentValue, growthRate, years);
        double valOptimized = forecastOptimized(currentValue, growthRate, years);

        System.out.printf("Recursive: ₹%.2f\n", valRecursive);
        System.out.printf("Iterative: ₹%.2f\n", valIterative);
        System.out.printf("Optimized ₹%.2f\n", valOptimized);

        sc.close();
    }
}
