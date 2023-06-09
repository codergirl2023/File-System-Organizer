```
# File System Organizer

A Node.js command-line application to organize files in a directory based on their file types.

## Description

The File System Organizer is a command-line tool that helps you organize files in a directory by grouping them into separate folders based on their file types. It scans the specified directory, identifies the file types, and moves each file into the appropriate folder.

## Features

- Automatically organizes files in a directory based on their file types.
- Supports various file types, including documents, images, videos, audio files, and more.
- Provides a command-line interface for easy usage.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:

   ```bash
   npm install
   ```

## Usage

Open a command-line interface and navigate to the project directory. The following commands are available:

- To display a tree-like representation of the files and directories in a directory, use the `tree` command:

   ```bash
   peppy tree <directory_path>
   ```

   Replace `<directory_path>` with the path to the directory you want to display the tree for. If no directory path is provided, it will work on the current directory.

- To organize files in a directory based on their file types, use the `organize` command:

   ```bash
   peppy organize <directory_path>
   ```

   Replace `<directory_path>` with the path to the directory you want to organize. It will create separate folders for each file type and move the files accordingly.

- To display the list of available commands and their usage, use the `help` command:

   ```bash
   peppy help
   ```

   This command will provide information on how to use the application and its available commands.irements and any additional information you want to include.
