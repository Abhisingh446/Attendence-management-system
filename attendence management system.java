import java.util.*;

public class AttendanceManagementSystem {

    static Scanner sc = new Scanner(System.in);

    static ArrayList<String> students = new ArrayList<>();
    static ArrayList<String> attendance = new ArrayList<>();

    public static void main(String[] args) {

        System.out.println("===== Attendance Management System =====");

        System.out.print("Username: ");
        String user = sc.nextLine();

        System.out.print("Password: ");
        String pass = sc.nextLine();

        if (!user.equals("admin") || !pass.equals("admin123")) {
            System.out.println("Invalid Login!");
            return;
        }

        while (true) {

            System.out.println("\n===== MENU =====");
            System.out.println("1. Add Student");
            System.out.println("2. View Students");
            System.out.println("3. Mark Attendance");
            System.out.println("4. View Attendance Report");
            System.out.println("5. Exit");

            System.out.print("Choose Option: ");

            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    addStudent();
                    break;

                case 2:
                    viewStudents();
                    break;

                case 3:
                    markAttendance();
                    break;

                case 4:
                    viewAttendance();
                    break;

                case 5:
                    System.out.println("Thank You!");
                    System.exit(0);

                default:
                    System.out.println("Invalid Choice");
            }
        }
    }

    static void addStudent() {

        System.out.print("Enter Roll No: ");
        String roll = sc.nextLine();

        System.out.print("Enter Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Course: ");
        String course = sc.nextLine();

        String student =
                "Roll: " + roll +
                ", Name: " + name +
                ", Course: " + course;

        students.add(student);

        System.out.println("Student Added Successfully!");
    }

    static void viewStudents() {

        System.out.println("\n===== STUDENTS =====");

        if (students.isEmpty()) {
            System.out.println("No Students Found");
            return;
        }

        for (int i = 0; i < students.size(); i++) {
            System.out.println((i + 1) + ". " + students.get(i));
        }
    }

    static void markAttendance() {

        if (students.isEmpty()) {
            System.out.println("Add Students First");
            return;
        }

        viewStudents();

        System.out.print("Select Student Number: ");
        int index = sc.nextInt();
        sc.nextLine();

        System.out.print("Status (Present/Absent): ");
        String status = sc.nextLine();

        String record =
                students.get(index - 1)
                + " -> "
                + status;

        attendance.add(record);

        System.out.println("Attendance Saved!");
    }

    static void viewAttendance() {

        System.out.println("\n===== ATTENDANCE REPORT =====");

        if (attendance.isEmpty()) {
            System.out.println("No Attendance Records");
            return;
        }

        for (String record : attendance) {
            System.out.println(record);
        }
    }
}
