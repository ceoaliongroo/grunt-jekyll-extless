# Set work directory.
cd $1

# Rename all the files.
for file in *.tmp
do
  mv "$file" "${file/.tmp/${dirname}}"
done