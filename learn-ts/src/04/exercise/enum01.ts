{
  // 1
  enum Day {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: number): string {
    switch (day) {
      case Day.MONDAY:
        return "Monday";
      case Day.TUESDAY:
        return "Tuesday";
      case Day.WEDNESDAY:
        return "Wednesday";
      case Day.THURSDAY:
        return "Thursday";
      case Day.FRIDAY:
        return "Friday";
      case Day.SATURDAY:
        return "Saturday";
      case Day.SUNDAY:
        return "Sunday";
      default:
        return "Invalid day";
    }
  }
}
{
  // 2
  enum StatusCode {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: number): string {
    switch (status) {
      case StatusCode.SUCCESS:
        return "Success";
      case StatusCode.NOT_FOUND:
        return "Not Found";
      case StatusCode.INTERNAL_ERROR:
        return "Internal Server Error";
      default:
        return "Unknown Status";
    }
  }
}
{
  // 3
  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): string {
    switch (zip) {
      case "100":
        return City.SEOUL;
      case "200":
        return City.BUSAN;
      case "300":
        return City.DAEGU;
      default:
        return "Unknown City";
    }
  }
}
{
  // 4
  enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: string): string {
    switch (role) {
      case Role.ADMIN:
        return "Full access";
      case Role.USER:
        return "Limited access";
      case Role.GUEST:
        return "Guest access";
      default:
        return "No access";
    }
  }
}
