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

    let opened_file = File::open(read_file_path)
        .expect("Failed to read file");
    let reader = BufReader::new(opened_file);

    let lines = reader.lines().count();

    println!("{}", lines);
}
