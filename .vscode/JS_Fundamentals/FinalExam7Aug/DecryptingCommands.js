function decryptingCommands(str) {
    switch (splitCommand[0]){
        case "Replace":
            for (let i = 0; i < encryptedCommand.length(); i++) {
                if ((int)encryptedCommand.charAt(i) == (int)splitCommand[1].charAt(0)){
                    encryptedCommand.insert(i, splitCommand[2]);
                    encryptedCommand.deleteCharAt(i+splitCommand[2].length());
                }
            }
            System.out.println(encryptedCommand);
            break;
        case "Cut":
            if (Integer.parseInt(splitCommand[1]) <= encryptedCommand.length() &&
                    Integer.parseInt(splitCommand[1]) != 0 &&
                    Integer.parseInt(splitCommand[2]) <= encryptedCommand.length() &&
                    Integer.parseInt(splitCommand[2]) != 0)
            {
                encryptedCommand.delete(Integer.parseInt(splitCommand[1]), Integer.parseInt(splitCommand[2])+1);
                System.out.println(encryptedCommand);
            }
            else
                System.out.println("Invalid indices!");
            break;
        case "Make":
            if (splitCommand[1].equals("Upper")){
                for (int i = 0; i < encryptedCommand.length(); i++) {
                    if (Character.isLowerCase(encryptedCommand.charAt(i))) {
                        encryptedCommand.setCharAt(i,
                                Character.toUpperCase(encryptedCommand.charAt(i)));
                    }
                }
                System.out.println(encryptedCommand);
            }
            else if (splitCommand[1].equals("Lower")){
                for (int i = 0; i < encryptedCommand.length(); i++) {
                    if (Character.isUpperCase(encryptedCommand.charAt(i))) {
                        encryptedCommand.setCharAt(i,
                                Character.toLowerCase(encryptedCommand.charAt(i)));
                    }
                }
                System.out.println(encryptedCommand);
            }
            break;
        case "Check":
            if (encryptedCommand.indexOf(splitCommand[1]) > -1){
                System.out.println("Message contains " + splitCommand[1]);
            }
            else
                System.out.println("Message doesn't contain " + splitCommand[1]);
            break;
        case "Sum":
            if (Integer.parseInt(splitCommand[1]) >= 0 && Integer.parseInt(splitCommand[1]) < encryptedCommand.length()
                    && Integer.parseInt(splitCommand[2]) >= 0
                    && Integer.parseInt(splitCommand[1]) < encryptedCommand.length())
            {
                String substring = encryptedCommand.substring(Integer.parseInt(splitCommand[1]), Integer.parseInt(splitCommand[2])+1);
                long sum = 0;
                for (int i = 0; i < substring.length(); i++) {
                    sum+= (int)substring.charAt(i);
                }
                System.out.println(sum);
            }
            else
                System.out.println("Invalid indices!");
            break;
    }
}while (!command.equals("Finish"));

}

}
decryptingCommands((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"]))