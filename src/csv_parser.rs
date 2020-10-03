use std::io::{
    self,
    prelude::*,
    BufReader
};
use std::fs::{
    self,
    File
};
use std::env;

// The `main` function is where your program starts executing.
fn main() {
    let args: Vec<String> = env::args().collect();
    let read_file_path = String::from(args.get(1).to_owned().unwrap());
    let output_file_path = String::from(args.get(2).to_owned().unwrap());

    println!("Opening file: {}", read_file_path);
    let opened_file = File::open(read_file_path)
        .expect("Failed to read file");
    let reader = BufReader::new(opened_file);
    let mut output = File::create(output_file_path)
        .expect("Failed to create file!");

    for line in reader.lines() {
        writeln!(output, "{}", line.unwrap().replace('"', "")).unwrap();
    }

    println!("Done!");
}
