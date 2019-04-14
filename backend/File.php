<?php

class File {
    public static $fileName = 'CalcTable.csv';
    private $fileHeaders = array(
        'Calc Sum',
        'Date',
        'IP Address',
        'Browser'
    );
    private $file;

    function __construct($editMode = false) {
        $fileExist = File::is_file_created();
        $fileMode = $editMode ? 'a' : 'r';

        if($fileExist || $editMode) {
            $this->file = fopen(self::$fileName, $fileMode);
        }
        if (!$fileExist && $editMode) {
            $this->create_file_headers();
        }
    }

    public static function is_file_created() {
        return file_exists(self::$fileName);
    }

    public function create_file_headers() {
        $this->write_to_file($this->fileHeaders);
    }

    public function write_to_file($fields) {
        fputcsv($this->file, $fields);
    }

    public function get_records() {
        $records = array();
        if (!File::is_file_created()) return $records;
        while(! feof($this->file)) {
            $fileRow = fgetcsv($this->file);
            array_push($records,[
                'sum' => $fileRow[0],
                'date' => $fileRow[1],
                'ip' => $fileRow[2],
                'browser' => $fileRow[3]
            ]);
        }
        array_shift($records);
        array_pop($records);
        return $records;
    }

    public function close_file() {
        fclose($this->file);
    }
}
?>