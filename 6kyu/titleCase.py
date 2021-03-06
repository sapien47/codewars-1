""" A string is considered to be in title case if each word in the string is
either (a) capitalised (that is, only the first letter of the word is in upper
case) or (b) considered to be an exception and put entirely into lower case
unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional
list of exceptions (minor words). The list of minor words will be given as a
string with each word separated by a space. Your function should ignore the
case of the minor words string -- it should behave in the same way even if
the case of the minor word string is changed."""


def title_case(title, minor_words=''):
    if not len(title):
        return ''
    words = title.title().split()
    minor_words = minor_words.lower().split()
    title_cased_words = [words[0]]

    for word in words[1:]:
        if word.lower() in minor_words:
            title_cased_words.append(word.lower())
        else:
            title_cased_words.append(word)

    return " ".join(title_cased_words)

# refactored:

def title_case(title, minor_words=''):
    title = title.capitalize().split()
    minor_words = minor_words.lower().split()
    title_cased_words = []

    for word in title:
        if word in minor_words:
            title_cased_words.append(word)
        else:
            title_cased_words.append(word.capitalize())

    return ' '.join(title_cased_words)
